import {Component, OnInit} from '@angular/core';
import {Projecto} from "../projecto";
import {ProjectoService} from "../projecto.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projectos: Projecto[];
  constructor(private projectoService: ProjectoService) {
  }

  ngOnInit(): void {
    this.projectoService.getProjectos().subscribe((data: Projecto[]) => {
      console.log(data);
      this.projectos = data;
    });
  }

}
