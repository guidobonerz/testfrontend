import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly currentLang = signal('en');
  readonly language = this.currentLang.asReadonly();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
  }
}
