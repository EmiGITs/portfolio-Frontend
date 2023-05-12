import {Component, OnInit} from '@angular/core';
import {Projecto} from "../projecto";
import {ProjectoService} from "../projecto.service";
import {ApiService} from "../api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditProjectoComponent} from "../PopUp/edit-projecto/edit-projecto.component";
import {CreateProjectoComponent} from "../PopUp/create-projecto/create-projecto.component";

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

      this.projectos = data;
    });
  }

  editItem(projectoModel: Projecto) {

    const ref = this.modalService.open(EditProjectoComponent, { centered: true });
    ref.componentInstance.selectedProjecto = projectoModel;

    ref.result.then((yes) => {
        this.setProjectosList();


      },
      (cancel) => {
        console.log("Cerrar modal");

      })
  }

  createItem() {

    const ref = this.modalService.open(CreateProjectoComponent, { centered: true });


    ref.result.then((yes) => {
        this.setProjectosList();


      },
      (cancel) => {
        console.log("Cerrar modal");

      })
  }

  deleteItem(projectoModel: Projecto) {

    this.projectoService.deleteProjectoById(projectoModel.id).subscribe(x => this.setProjectosList());
  }

  private setProjectosList() {
    this.projectoService.getProjectos().subscribe(x => {
      this.projectos = x;
    })
  }

}
