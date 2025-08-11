import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-forum-page', 
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css']
})
export class ForumPageComponent {
  searchTerm = '';
  selectedPost: any = null;
  isEditing = false;

  posts = [
    {
      title: 'Смяна на ламиниран паркет',
      content: 'Някой знае ли лесен начин за премахване на стария паркет?',
      author: 'Иван',
      date: '2025-08-10'
    },
    {
      title: 'Мнение за лепило за плочки',
      content: 'Кое лепило е по-добро за баня - Церезит или друг вид?',
      author: 'Мария',
      date: '2025-08-08'
    }
  ];

  get filteredPosts() {
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewPost(post: any) {
    this.selectedPost = { ...post }; // копие, за да не променям директно
    this.isEditing = false;
  }

  deletePost() {
    this.posts = this.posts.filter(p => p !== this.selectedPost);
    this.selectedPost = null;
    this.isEditing = false;
  }

  saveEdit() {
    if (this.selectedPost) {
      const index = this.posts.findIndex(p => p.title === this.selectedPost.title && p.author === this.selectedPost.author);
      if (index > -1) {
        this.posts[index] = { ...this.selectedPost };
      }
      this.isEditing = false;
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }

  backToList() {
    this.selectedPost = null;
    this.isEditing = false;
  }

  startEdit() {
    this.isEditing = true;
  }
}
