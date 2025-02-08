import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumber',
  standalone: false,
  templateUrl: './guessnumber.component.html',
  styleUrl: './guessnumber.component.css'
})
export class GuessnumberComponent {
  guessnumber!:any ;
  randomNumber!: number;
  displayContent!:string;

  constructor() {
    this.randomNumber = Math.floor(Math.random()*100);
    console.log(this.randomNumber)
  }

  handleResetClick(){
    console.log('reset in parent');
    this.guessnumber=''
  }

  handleCheckClick(){
    console.log('check in parent')
    if(this.guessnumber<this.randomNumber){
      this.displayContent='Your guess is Less than the actual number'
    }else if(this.guessnumber>this.randomNumber){
      this.displayContent='Your guess is More than the actual number'
    }else{
      this.displayContent='Correct Guess'
    }
  }
}
