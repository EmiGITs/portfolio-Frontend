import {Component, OnInit} from '@angular/core';
import {Projecto} from "../projecto";
import {ProjectoService} from "../projecto.service";
import {ApiService} from "../api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditProjectoComponent} from "../PopUp/edit-projecto/edit-projecto.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projectos: Projecto[];
  constructor(private projectoService: ProjectoService, public _apiService: ApiService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.projectoService.getProjectos().subscribe((data: Projecto[]) => {
      console.log(data);
      this.projectos = data;
    });
  }

  editItem(projectoModel: Projecto) {

    const ref = this.modalService.open(EditProjectoComponent, { centered: true });
    ref.componentInstance.selectedProjecto = projectoModel;

    ref.result.then((yes) => {
        window.location.reload();


      },
      (cancel) => {
        console.log("Cerrar modal");

      })
  }

}
