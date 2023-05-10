import {Component, OnInit} from '@angular/core';
import {Educacion} from "../educacion";
import {EducacionService} from "../educacion.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educaciones: Educacion[];
  constructor(private educacionService: EducacionService) {
  }

  ngOnInit(): void {
    this.educacionService.getEducaciones().subscribe((data: Educacion[]) => {
      this.educaciones = data;
    });
  }
}
