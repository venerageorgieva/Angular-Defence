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

  getPosts(limit?: number) {
    let url = `/api/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<Post[]>(url);
  }

  getThemes() {
    return this.http.get<Theme[]>(`/api/themes`);
  }

  getSingleTheme(id: string) {
    return this.http.get<Theme>(`/api/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    const payload = { themeName, postText };
    return this.http.post<Theme>(`/api/themes`, payload);
  }

  // CRUD operations
  // update -> http.put
  updateTheme(themeId: string, themeName: string, postText: string) {
    const payload = { themeName, postText };
    return this.http.put<Theme>(`/api/themes/${themeId}`, payload);
  }

  updatePost(themeId: string, postId: string) {
    const payload = {};
    return this.http.put<Theme>(
      `/api/themes/${themeId}/posts/${postId}`,
      payload
    );
  }

//   // delete -> http.delete theme ID
//   deletePost(themeId: string, postId: string) {
//     return this.http.delete(`/api/themes/${themeId}/posts/${postId}`);
//   }

// addComment(themeId: string, text: string) {
//   return this.http.post<Post>(`/themes/${themeId}`, { text });
// }

// likePost(postId: string): Observable<any> {
//   return this.http.post(`/posts/${postId}`, {}); //
// }


// Харесване на пост
  likePost(postId: string): Observable<any> {
    return this.http.post(`/api/themes/posts/${postId}/like`, {});
  }

  // Добавяне на коментар
  addComment(postId: string, text: string): Observable<Comment> {
    return this.http.post<Comment>(`/api/themes/posts/${postId}/comments`, { text });
  }

  // Изтриване на пост
  deletePost(postId: string): Observable<any> {
    return this.http.delete(`/api/themes/posts/${postId}`);
  }

  // Изтриване на коментар
  deleteComment(postId: string, commentId: string): Observable<any> {
    return this.http.delete(`/api/themes/posts/${postId}/comments/${commentId}`);
  }
}
