import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private baseUrl = "http://localhost:8000/api/experiencias";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  getExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.baseUrl}`);
  }

  updateExperiencia(experienciaModel: Experiencia){
    return this.http.patch(`${this.baseUrl}/${experienciaModel.id}/update`,experienciaModel, this.httpOptions)
  }
}
