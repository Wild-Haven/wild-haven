import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wild-haven');
  protected readonly isMenuOpen = signal(false);
  protected readonly isAssoOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
    if (!this.isMenuOpen()) {
      this.isAssoOpen.set(false);
    }
  }

  toggleAssoMenu(): void {
    this.isAssoOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
    this.isAssoOpen.set(false);
  }
}
