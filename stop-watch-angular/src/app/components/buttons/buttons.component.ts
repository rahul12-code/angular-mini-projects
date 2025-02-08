import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: false,
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  @Output() startClick = new EventEmitter();
  @Output() stopClick = new EventEmitter();
  @Output() resetClick = new EventEmitter();
  
  handleStart(){
    this.startClick.emit();
  }

  handleStop(){
    this.stopClick.emit();
  }

  handleReset(){
    this.resetClick.emit();
  }
}
