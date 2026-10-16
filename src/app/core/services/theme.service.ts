import { Injectable, signal } from '@angular/core';
import { Theme } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly currentTheme = signal<Theme>(Theme.LIGHT);

  constructor() {
    this.initializeTheme();
  }

  toggleTheme(): void {
    const nextTheme =
      this.currentTheme() === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    this.setTheme(nextTheme);
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);

    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);

    localStorage.setItem('theme', theme);
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme === Theme.LIGHT || savedTheme === Theme.DARK) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(Theme.DARK);
    }
  }
}
