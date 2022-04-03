import {Component, OnInit} from '@angular/core';
import {Character} from "../../game-logic/character/character";

@Component({
  selector: 'app-battle-scene',
  templateUrl: './battle-scene.component.html',
  styleUrls: ['./battle-scene.component.scss']
})
export class BattleSceneComponent implements OnInit {

  public heroes = [];
  public enemies = [new Character(), new Character(), new Character(), new Character(), new Character(),];

  constructor() {
  }

  ngOnInit(): void {
  }

}
