import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name : string = 'Spiderman';
  public age  : number = 17;

  get capitalizedName() : string{
    return this.name.toUpperCase();
  }

  public getHeroDescription() : string{
    return `${this.name} - ${this.age}`
  }

  public changeHero() : void{
    this.name = 'Black Panther';
  }

  public changeAge() : void{
    this.age = 35;
  }

  public resetForm() : void{
    this.name = 'Spiderman';
    this.age  = 17;
  }
}
