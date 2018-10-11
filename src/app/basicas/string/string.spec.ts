import {mensaje} from './string';

describe('Pruebas de strings', () => {

  it('Debe retornar un string', () => {
    const resp = mensaje('Fran');
    expect(typeof resp).toBe('string');
  });

  it('Debe retornar un string con el parametro enviado', () => {
    const nombre = 'Juan';
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);
  });

});
