import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, TranslateModule, ButtonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  constructor(
    protected themeService: ThemeService,
    protected languageService: LanguageService
  ) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  switchLanguage(lang: string): void {
    this.languageService.switchLanguage(lang);
  }
}
