import {Player} from './clase';

describe('Pruebas de clase', () => {

  let player = new Player();


  beforeAll(() => {
    //console.log('beforeAll');
  });

  beforeEach(() => {
    //console.log('beforeEach');
    //player.hp = 100;
    player = new Player();
  });

  afterAll(() => {
    //console.log('afterAll');
  });

  afterEach(() => {
    //console.log('afterEach');
    player.hp = 100;
  });



  it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {
    const resp = player.receiveDamage(20);
    expect(resp).toBe(80);
  });

  it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
    const resp = player.receiveDamage(20);
    expect(resp).toBe(80);
  });

  it('Debe de retornar 0 de hp, si recibe 100 de daño o más', () => {
    const resp = player.receiveDamage(101);
    expect(resp).toBe(0);
  });



});
