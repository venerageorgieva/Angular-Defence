import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // ===== THEMES =====
  getThemes() {
    return this.http.get<Theme[]>(`/api/themes`);
  }

  getSingleTheme(id: string) {
    return this.http.get<Theme>(`/api/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    return this.http.post<Theme>(`/api/themes`, { themeName, postText });
  }

  updateTheme(themeId: string, themeName: string, postText: string) {
    return this.http.put<Theme>(`/api/themes/${themeId}`, { themeName, postText });
  }

  deleteTheme(themeId: string): Observable<void> {
    return this.http.delete<void>(`/api/themes/${themeId}`);
  }

  // ===== POSTS =====
  getPosts(limit?: number) {
    let url = `/api/posts`;
    if (limit) url += `?limit=${limit}`;
    return this.http.get<Post[]>(url);
  }

// === ИЗТРИВАНЕ НА ПОСТ ===
deletePost(themeId: string, postId: string): Observable<void> {
  return this.http.delete<void>(`/api/themes/${themeId}/posts/${postId}`);
}

// === РЕДАКЦИЯ НА ПОСТ ===
updatePost(themeId: string, postId: string, text: string): Observable<Post> {
  return this.http.put<Post>(`/api/themes/${themeId}/posts/${postId}`, { postText: text });
}


  likePost(postId: string) {
    return this.http.put(`/api/likes/${postId}`, {});
  }

  // ===== COMMENTS =====
  addComment(themeId: string, postText: string): Observable<Post> {
    return this.http.post<Post>(`/api/themes/${themeId}`, { postText });
  }
}
