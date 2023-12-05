import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent{
  public initialValueCounter : number = 10
  public counter : number = this.initialValueCounter;

  changeCounter( value : number) : void {
    this.counter += value;
  }

  resetCounter() : void {
    this.counter = this.initialValueCounter;
  }

}
