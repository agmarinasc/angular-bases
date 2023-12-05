import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesNames : string[] = ['Spiderman', 'Black Panther', 'Gamora', 'Captain America', 'Black Widow'];
  public deletedHero? : string;

  public deleteHero() : void{
    this.deletedHero = this.heroesNames.pop();
  }
}
