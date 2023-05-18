import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteIndex: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteIndex.emit(id);
  }
}
