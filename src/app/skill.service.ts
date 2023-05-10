import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = "http://localhost:8000/api/skills";

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.baseUrl}`);
  }
}
