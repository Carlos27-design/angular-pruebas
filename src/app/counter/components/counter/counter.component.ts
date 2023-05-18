import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
    <h3>counter: {{ count }}</h3>

    <button (click)="byCount(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="byCount(-1)">-1</button>
    ,`,
})
export class CounterComponent implements OnInit {
  public count: number = 12;

  constructor() {}

  ngOnInit() {}

  public byCount(value: number): void {
    this.count += value;
  }

  public resetCounter(): void {
    this.count = 12;
  }
}
