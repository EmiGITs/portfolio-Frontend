import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projecto } from './projecto';

@Injectable({
  providedIn: 'root'
})
export class ProjectoService {

  private baseUrl = "https://portfolio-backend-production-748d.up.railway.app/api/projectos";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  getProjectos(): Observable<Projecto[]>{
    return this.http.get<Projecto[]>(`${this.baseUrl}`);
  }

  updateProjecto(projectoModel: Projecto){
    return this.http.patch(`${this.baseUrl}/${projectoModel.id}/update`,projectoModel, this.httpOptions)
  }

  deleteProjectoById(id: number) {

    return this.http.delete(`${this.baseUrl}/${id}/delete`, this.httpOptions);
  }

  createProjecto(projectoModel: Projecto) {

    return this.http.post(`${this.baseUrl}/create`,projectoModel, this.httpOptions);
  }
}
