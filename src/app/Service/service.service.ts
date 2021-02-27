import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactoRegistro } from '../model/contacto.registro';

@Injectable()
export class ServiceService {

  public Url = 'http://localhost:3050/api/';
  //subida de archivos
  public urlApi = 'http://localhost:3050/api/';


  constructor(private http: HttpClient) {

  }
  //subida de archivos
  uploadFile(formData:any){
    let urlApi = 'http://localhost:3050/api/subir';
    return this.http.post(urlApi, formData);
  }

  getRegistro(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.Url + 'registro', { headers: headers });
  }

  saveRegistro(usuarios: ContactoRegistro): Observable<any> {

    let params = JSON.stringify(usuarios);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.Url + 'agregar', params, { headers: headers })
  }
  
  updateRegistro(usuarios: ContactoRegistro): Observable<any> {
    let params = JSON.stringify(usuarios);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.Url + 'actualizarRegistgro/' + usuarios.id, params, { headers: headers });
  }

  deleteRegistro(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.Url + 'eliminarRegistro/' + id, { headers: headers });
  }

  getRegistroUser(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.Url + 'registroUser/' + id, { headers: headers });
  }
}

