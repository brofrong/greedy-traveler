import {Characteristic} from "./characteristic";
import {Drawable} from "./drawable";

export class Character {
  public healthPoints = 0;
  public characteristic: Characteristic;
  public equipment = null;
  public drawable: Drawable;

  constructor(character?: { characteristic: Characteristic, drawable: {idle: string} }) {
    this.characteristic = new Characteristic();
    this.drawable = new Drawable();
  }
}
