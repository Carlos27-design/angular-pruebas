import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Doctor Strange';
  public age: number = 34;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = 'Capitan America';
  }

  public changeAge(): void {
    this.age = 23;
  }

  public reset(): void {
    this.name = 'Doctor Strange';
    this.age = 34;
  }
}
