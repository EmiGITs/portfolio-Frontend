import {Component, OnInit} from '@angular/core';
import {Experiencia} from "../experiencia";
import { ExperienciaService } from '../experiencia.service';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  experiencias: Experiencia[];
  constructor(private experienciaService: ExperienciaService, public _apiService: ApiService) {
  }

  ngOnInit(): void {
    this.experienciaService.getExperiencias().subscribe((data: Experiencia[]) => {
      console.log(data);
      this.experiencias = data;
    });
  }

}
