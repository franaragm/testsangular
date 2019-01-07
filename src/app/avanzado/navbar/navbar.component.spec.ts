import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {By} from '@angular/platform-browser';
import {RouterLinkWithHref} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un link a la pagina de medicos', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let exists = false;

    for(const elem of debugElements) {
      if(elem.attributes['routerLink'] === '/medicos') {
        exists = true;
        break;
      }
    }

    expect(exists).toBeTruthy();
  });

});
