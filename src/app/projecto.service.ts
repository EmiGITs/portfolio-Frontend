import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projecto } from './projecto';

@Injectable({
  providedIn: 'root'
})
export class ProjectoService {

  private baseUrl = "http://localhost:8000/api/projectos";

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
}
