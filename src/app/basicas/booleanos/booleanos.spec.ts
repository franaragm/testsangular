import {userLogged} from './booleanos';


describe('Pruebas de Booleanos', () => {

  it('Debe de retornar true', () => {
    const resp = userLogged();
    expect(resp).toBeTruthy();
  });

});
