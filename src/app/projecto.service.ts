import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projecto } from './projecto';

@Injectable({
  providedIn: 'root'
})
export class ProjectoService {

  private baseUrl = "http://localhost:8000/projectos";

  constructor(private http: HttpClient) { }

  getProjectos(): Observable<Projecto[]>{
    return this.http.get<Projecto[]>(`${this.baseUrl}`);
  }
}
