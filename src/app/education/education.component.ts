import {Component, OnInit} from '@angular/core';
import {Educacion} from "../educacion";
import {EducacionService} from "../educacion.service";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educaciones: Educacion[];
  constructor(private educacionService: EducacionService, public _apiService: ApiService) {
  }

  ngOnInit(): void {
    this.educacionService.getEducaciones().subscribe((data: Educacion[]) => {
      this.educaciones = data;
    });
  }
}
