import { Component } from '@angular/core';
import { Character } from '../interface/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  constructor(private _dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this._dbzService.characters];
  }

  public onDeleteCharacter(id: string): void {
    return this._dbzService.onDeleteCharacter(id);
  }

  public onNewCharacter(character: Character): void {
    this._dbzService.onNewCharacter(character);
  }
}
