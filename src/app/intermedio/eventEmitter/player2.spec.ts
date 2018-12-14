import {Player2} from './player2';

describe('Player 2 emit', () => {

  let player: Player2;

  beforeEach(() => {
    player = new Player2();
  });

  it('Debe de emitir un evento cuando recibe daño', () => {
    let nuevoHP = 0;

    player.hpOnChange.subscribe( hp => {
      nuevoHP = hp;
    });

    player.receiveDamage(1000);
    expect(nuevoHP).toBe(0);
  });

  it('Debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {
    let nuevoHP = 0;

    player.hpOnChange.subscribe( hp => {
      nuevoHP = hp;
    });

    player.receiveDamage(50);
    expect(nuevoHP).toBe(50);
  });



});
