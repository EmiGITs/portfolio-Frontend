import {Component, OnInit} from '@angular/core';
import {Experiencia} from "../experiencia";
import { ExperienciaService } from '../experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  experiencias: Experiencia[];
  constructor(private experienciaService: ExperienciaService) {
  }

  ngOnInit(): void {
    this.experienciaService.getExperiencias().subscribe((data: Experiencia[]) => {
      console.log(data);
      this.experiencias = data;
    });
  }

}
