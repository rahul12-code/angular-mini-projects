import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: false,
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  @Output() resetClick = new EventEmitter();
  @Output() checkClick = new EventEmitter();

  handleReset(){
    this.resetClick.emit();
  }

  handleCheck(){
    this.checkClick.emit();
  }

}
