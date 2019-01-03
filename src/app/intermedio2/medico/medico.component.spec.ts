import {TestBed, ComponentFixture} from '@angular/core/testing';
import {MedicoComponent} from './medico.component';
import {MedicoService} from './medico.service';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

describe('Medico Componente', () => {

  let component: MedicoComponent;

  let fixture: ComponentFixture<MedicoComponent>;

  let medicoService: MedicoService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [ MedicoService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
    medicoService = TestBed.get(MedicoService);

  });

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornar el nombre del médico', () => {
    const nombre = 'Juan';
    const res = component.saludarMedico(nombre);

    expect(res).toContain(nombre);
  });

  it('Debe de cargar los médicos', () => {

    const medicos = ['medico1', 'medico2', 'medico3'];

    // espia metodo de servicio y cuando alguien lo llame se crea una respuesta simulada o falsa
    spyOn(medicoService, 'getMedicos').and.callFake(() => {
      return Observable.from([medicos]);
    });

    component.obtenerMedicos();

    expect(component.medicos.length).toBeGreaterThan(0);
  });

});
