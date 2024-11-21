import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburguer-card',
  standalone: true,
  imports: [],
  templateUrl: './hamburguer-card.component.html',
  styleUrl: './hamburguer-card.component.css'
})
export class HamburguerCardComponent {
  @Input() name: string = "Nome";
  @Input() id: number = 0;
  @Input() description: string = "Description";
}
