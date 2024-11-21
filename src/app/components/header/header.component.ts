import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false; // Estado do menu

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Alterna entre aberto e fechado
  }
}
