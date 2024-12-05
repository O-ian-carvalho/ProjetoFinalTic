import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
    @Input() name: string = "Quantidade";
    @Input() desc: string = "...";
    @Output() valueChange = new EventEmitter<string>();
    onInputChange(event: Event): void {
      const input = event.target as HTMLInputElement;
      this.valueChange.emit(input.value); 
    }
}
