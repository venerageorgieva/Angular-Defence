import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { UserService } from '../../user/user.service';
import { Theme } from '../../types/theme';
import { Post } from '../../types/post';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../types/user';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HomeComponent,CommonModule],
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;
  userId: string = '';

  commentForm = new FormGroup({
    text: new FormControl('')
  });
  comment: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['themeId'];
    this.userId = this.userService.user?.id || '';

    this.loadTheme(id);
  }

  loadTheme(id: string) {
    this.apiService.getSingleTheme(id).subscribe(theme => {
      this.theme = theme;
    });
  }

likePost(postId?: string) {
  if (!postId) {
    console.error('⚠️ postId е undefined!');
    return;
  }

  this.apiService.likePost(postId).subscribe({
    next: (updatedPost: Post) => {
      const index = this.theme.posts.findIndex(
        p => p._id === postId || (p as any).id === postId
      );
      if (index !== -1) {
        this.theme.posts[index] = updatedPost;
      }
    },
    error: err => console.error('❌ Грешка при харесване:', err)
  });
}




  deletePost(postId: string) {
    this.apiService.deletePost(postId).subscribe({
      next: () => {
        this.theme.posts = this.theme.posts.filter(p => p._id !== postId);
      },
      error: err => console.error('Грешка при изтриване:', err)
    });
  }
  addComment(postId: string) {
    const text = this.commentForm.value.text?.trim();
    if (!text) return;

    this.apiService.addComment(postId, text).subscribe({
      next: comment => {
        const post = this.theme.posts.find(p => p._id === postId);
        if (post) {
          post.comments = post.comments || [];
          post.comments.push(comment);
        }
        this.commentForm.reset();
      },
      error: err => console.error('Грешка при добавяне на коментар:', err)
    });
  }

  
}
