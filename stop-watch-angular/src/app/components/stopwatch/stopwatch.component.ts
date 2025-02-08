import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  standalone: false,
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.css'
})
export class StopwatchComponent {

  minutes: number = 0;
  seconds: number = 0 ;
  milliseconds: number = 0;
  startInterval: any

  handleStartClick(){
    console.log('start')
    let min=this.minutes;
    let ms=this.milliseconds;
    let s=this.seconds;

    this.startInterval=setInterval(()=>{
      ms=ms+10
      this.milliseconds=ms
      if(ms===1000){
        ms=0
        s=s+1
        this.seconds=s
        if(s===60){
          s=0
          min=min+1
          this.minutes=min
        }
      }
    },10)
  }

  handleStopClick(){
    console.log('stop')
    console.log(this.minutes,this.seconds,this.milliseconds);
    clearInterval(this.startInterval)
  }

  handleResetClick(){
    console.log('reset')
    clearInterval(this.startInterval)
    this.milliseconds=0
    this.seconds=0
    this.minutes=0
  }

}
