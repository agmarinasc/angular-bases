import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList : Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDeleteCharacter : EventEmitter<string> = new EventEmitter();

  onDelete(id : string):void{

    if( !id ) return;

    this.onDeleteCharacter.emit(id);
  }

}