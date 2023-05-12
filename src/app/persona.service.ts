import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseUrl = "http://localhost:8000/api/personas";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.baseUrl}`);
  }

  updatePersona(personaModel: Persona){
    return this.http.patch(`${this.baseUrl}/${personaModel.id}/update`,personaModel, this.httpOptions)
  }
}
