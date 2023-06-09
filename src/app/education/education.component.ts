import {Component, OnInit} from '@angular/core';
import {Educacion} from "../educacion";
import {EducacionService} from "../educacion.service";
import {ApiService} from "../api.service";
import {EditEducacionComponent} from "../PopUp/edit-educacion/edit-educacion.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateEducacionComponent} from "../PopUp/create-educacion/create-educacion.component";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educaciones: Educacion[];
  constructor(private educacionService: EducacionService, public _apiService: ApiService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.educacionService.getEducaciones().subscribe((data: Educacion[]) => {
      this.educaciones = data;
    });
  }

  editItem(educacionModel: Educacion) {

    const ref = this.modalService.open(EditEducacionComponent, { centered: true });
    ref.componentInstance.selectedEducacion = educacionModel;

    ref.result.then((yes) => {
        this.setEducacionList();


      },
      (cancel) => {
        console.log("Cerrar modal");

      })
  }

  deleteItem(educacionModel: Educacion) {

    this.educacionService.deleteEducacionById(educacionModel.id).subscribe(x => this.setEducacionList());
  }

  createItem() {

    const ref = this.modalService.open(CreateEducacionComponent, { centered: true });


    ref.result.then((yes) => {
        this.setEducacionList();


      },
      (cancel) => {
        console.log("Cerrar modal");

      })
  }

  private setEducacionList() {
    this.educacionService.getEducaciones().subscribe(x => {
      this.educaciones = x;
    })
  }
}
