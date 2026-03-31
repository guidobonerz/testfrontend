import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly darkMode = signal(false);
  readonly isDarkMode = this.darkMode.asReadonly();

  toggleTheme(): void {
    this.darkMode.update(v => !v);
    document.documentElement.classList.toggle('app-dark', this.darkMode());
  }
}
