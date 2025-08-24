import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { UserService } from '../../user/user.service';
import { Theme } from '../../types/theme';
import { Post } from '../../types/post';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HomeComponent],
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;
  userId: string = '';

  // Форма за редакция
  editForm = new FormGroup({
    text: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)]
    })
  });

  editingPostId: string | null = null;

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

    // fallback за id / _id
    this.userId =
      (this.userService.user as any)?._id ||
      (this.userService.user as any)?.id ||
      '';

    this.loadTheme(id);
  }

  loadTheme(id: string) {
    this.apiService.getSingleTheme(id).subscribe({
      next: (theme) => (this.theme = theme),
      error: (err) => console.error('Грешка при зареждане на тема:', err)
    });
  }

  likePost(postId: string) {
    this.apiService.likePost(postId).subscribe({
      next: () => {
        const post = this.theme.posts.find((p) => p._id === postId);
        if (post && !(post.likes || []).includes(this.userId)) {
          post.likes = post.likes || [];
          post.likes.push(this.userId);
        }
      },
      error: (err) => console.error('Грешка при харесване:', err)
    });
  }

deletePost(postId: string) {
  this.apiService.deletePost(this.theme._id, postId).subscribe({
    next: () => {
      this.theme.posts = this.theme.posts.filter((p) => p._id !== postId);
    },
    error: (err) => console.error('Грешка при изтриване:', err)
  });
}


  // ----- EDIT -----
  startEdit(post: Post) {
    this.editingPostId = post._id;
    this.editForm.setValue({ text: post.text || '' });
    this.editForm.markAsPristine();
  }

  cancelEdit() {
    this.editingPostId = null;
    this.editForm.reset({ text: '' });
  }

  handleUpdatePost(postId: string) {
    if (this.editForm.invalid) return;

    const text = (this.editForm.value.text || '').trim();
    if (!text) return;

    this.apiService.updatePost(this.theme._id, postId, text).subscribe({
      next: (updatedPost: Post) => {
        const post = this.theme.posts.find((p) => p._id === postId);
        if (post) {
          post.text = updatedPost?.text ?? text;
        }
        this.cancelEdit();
      },
      error: (err) => console.error('Грешка при редакция:', err)
    });
  }
}
