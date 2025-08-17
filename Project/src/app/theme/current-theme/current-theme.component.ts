import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],  // поправено 'styleUrl' на 'styleUrls'
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;
  userId: string = ''; 

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService
  ) {}

  // Проверка дали потребителят е логнат
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  // Името на потребителя
  get username(): string {
    return this.userService.user?.username || '';
  }

  // Инициализация на компонента, извличане на темата
  ngOnInit(): void {
    const id = this.route.snapshot.params['themeId'];

    this.apiService.getSingleTheme(id).subscribe((theme) => {
      this.theme = theme;
      this.userId = this.userService.user?.id || ''; // Извличане на userId от UserService
    });
  }

  // Метод за харесване на пост
  likePost(postId: string) {
    this.apiService.likePost(postId).subscribe({
      next: () => {
        // Актуализираме броя на харесванията директно в компонента
        const post = this.theme.posts.find(p => p._id === postId);
        if (post) {
          post.likes.push(this.userId);
        }
      },
      error: (err) => {
        console.error('Грешка при харесване:', err);
      }
    });
  }
}
