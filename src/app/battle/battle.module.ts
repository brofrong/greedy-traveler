import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BattleComponent} from "./battle.component";
import {BottomMenuComponent} from './bottom-menu/bottom-menu.component';
import {BattleSceneComponent} from './battle-scene/battle-scene.component';
import {CharacterModule} from "../character/character.module";


@NgModule({
  declarations: [
    BattleComponent,
    BottomMenuComponent,
    BattleSceneComponent,
  ],
  imports: [
    CommonModule,
    CharacterModule
  ],
  exports: [
    BattleComponent
  ],
})
export class BattleModule {
}
