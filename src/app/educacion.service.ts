import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from './educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private baseUrl = "http://localhost:8000/api/educaciones";



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  getEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.baseUrl}`);
  }

  updateEducacion(educacionModel: Educacion){
    return this.http.patch(`${this.baseUrl}/${educacionModel.id}/update`,educacionModel, this.httpOptions)
  }


}
