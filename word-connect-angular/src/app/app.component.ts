import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'word-connect-angular';
  count: number = 0;
  wordsArray: any[];
  duplicateWordsArray!: any[];
  separateWords!: any[];
  clicks: number = 0;
  selectedArray: any[] = [];


  constructor() {
    this.wordsArray = [
      ['Andhra Pradesh', 'Amaravathi'],
      ['Telangana', 'Hyderabad'],
      ['Tamilnadu', 'Chennai'],
      ['Karanataka', 'Bangalore'],
    ];

    this.duplicateWordsArray=this.wordsArray.map(element => element);

    this.separateWords = this.wordsArray.flat().sort(() => Math.random() - 0.5);
    console.log(this.separateWords);
  }

  handleWordClick(word: string) {
    this.selectedArray.push(word);
    console.log(this.selectedArray);

    if (this.selectedArray.length === 2) {
      const index = this.wordsArray.findIndex(
        (pair) => pair.sort().join() === this.selectedArray.sort().join()
      );

      if (index !== -1) {
        this.wordsArray.splice(index, 1); // Remove the matching pair
        this.selectedArray = [];

        console.log(this.wordsArray);
        console.log(this.duplicateWordsArray)

        this.separateWords = this.wordsArray
          .flat()
          .sort(() => Math.random() - 0.5);
        console.log(this.separateWords);
      }else{
        this.selectedArray = [];
      }
    }

    this.clicks = this.clicks + 1;
    if (this.clicks % 2 === 0) {
      this.count += 1;
    }
    console.log(word);
  }

  handleReset() {
    this.separateWords = this.duplicateWordsArray.flat().sort(() => Math.random() - 0.5);
    this.count = 0;
  }
}
