import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from './educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private baseUrl = "http://localhost:8000/educaciones";

  constructor(private http: HttpClient) { }

  getEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.baseUrl}`);
  }
}
