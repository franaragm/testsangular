import {EventEmitter} from '@angular/core';


export class Player2 {

  hp: number;
  hpOnChange = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  receiveDamage(damage: number) {

    if(damage >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - damage;
    }

    this.hpOnChange.emit(this.hp);
  }

}
