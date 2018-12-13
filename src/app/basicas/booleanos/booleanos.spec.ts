import {userLogged} from './booleanos';


describe('Pruebas de Booleanos', () => {

  it('Debe de retornar true', () => {
    const resp = userLogged();
    expect(resp).toBeTruthy();
  });

  it('Debe de retornar el numero ingresado + 1, si no es mayor a 100', () => {
    const resp = incrementar(50);
    expect(resp).toBe(51);
  });

});
