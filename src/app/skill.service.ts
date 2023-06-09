import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = "https://portfolio-backend-production-748d.up.railway.app/api/skills";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.baseUrl}`);
  }

  updateSkill(skillModel: Skill){
    return this.http.patch(`${this.baseUrl}/${skillModel.id}/update`,skillModel, this.httpOptions)
  }

  deleteSkillById(id: number) {

    return this.http.delete(`${this.baseUrl}/${id}/delete`, this.httpOptions);
  }

  createSkill(skillModel: Skill) {

    return this.http.post(`${this.baseUrl}/create`,skillModel, this.httpOptions);
  }
}
