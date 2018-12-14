import {FormRegister} from './formulario';
import {FormBuilder} from '@angular/forms';

describe('Formularios', () => {

  let componente: FormRegister;

  beforeEach( () => {
    componente = new FormRegister(new FormBuilder());
  });

  it('Debe de crear un formulario con dos campos', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('El email debe de ser obligatorio', () => {
    const control = componente.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('El email debe de ser válido', () => {
    const control = componente.form.get('email');
    control.setValue('hhjh@');
    expect(control.valid).toBeFalsy();
  });

});
