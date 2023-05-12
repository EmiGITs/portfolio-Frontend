import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private baseUrl = "https://portfolio-backend-production-748d.up.railway.app/api/experiencias";

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

  deleteExperienciaById(id: number) {

    return this.http.delete(`${this.baseUrl}/${id}/delete`, this.httpOptions);
  }

  createExperiencia(experienciaModel: Experiencia) {

    return this.http.post(`${this.baseUrl}/create`,experienciaModel, this.httpOptions);
  }
}
