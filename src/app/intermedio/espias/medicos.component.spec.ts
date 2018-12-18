import {MedicosComponent} from './medicos.component';
import {MedicosService} from './medicos.service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';


describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe de cargar los médicos', () => {

    const medicos = ['medico1', 'medico2', 'medico3'];

    // espia metodo de servicio y cuando alguien lo llame se crea una respuesta simulada o falsa
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return Observable.from([medicos]);
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar un médico', () => {

    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
      return Observable.empty();
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();

  });

  it('Debe de agregar un nuevo médico al arreglo de médicos', () => {

    const medico = { id: 1, nombre: 'Juan'};

    spyOn(servicio, 'agregarMedico')
      .and.returnValue( Observable.from([medico]));

    componente.agregarMedico();

    //expect(componente.medicos.length).toBe(1);

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

  })


});
