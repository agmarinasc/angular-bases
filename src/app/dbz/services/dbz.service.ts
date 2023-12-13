import { Injectable } from "@angular/core";
import { Character } from '../interfaces/Character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService{
  public characters : Character[] = [
    {
      id    : uuid(),
      name  : 'Krillin',
      power : 1000
    },
    {
      id    : uuid(),
      name  : 'Goku',
      power : 9500,
    },
    {
      id    : uuid(),
      name  : 'Vegeta',
      power : 7500
    }
  ];

  addCharacter(character : Character) : void{

    const newCharacter : Character = {...character, id : uuid() }

    this.characters.push(newCharacter);

    console.log(newCharacter);
  }

  /*onDeleteCharacterByIndex(index : number){
    this.characters.splice(index, 1)
  }*/

  onDeleteCharacterById(id : string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
