import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(public http: HttpClient) {
  }

  getMedicos() {
    return this.http.get('...')
      .pipe(map(resp => resp['medico']));
  }

  agregarMedico(medico: any) {
    return this.http.post('...', medico)
      .pipe(map(resp => resp['medico']));
  }

  borrarMedico(id: string) {
    return this.http.delete('...')
      .pipe(map(resp => resp['medico']));
  }

}
