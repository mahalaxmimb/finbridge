import { Component, inject } from '@angular/core';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finbridge-web';

  private readonly themeservice = inject(ThemeService)
}
