import {Component, OnInit} from '@angular/core';
import {Experiencia} from "../experiencia";
import { ExperienciaService } from '../experiencia.service';
import {ApiService} from "../api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditExperienciaComponent} from "../PopUp/edit-experiencia/edit-experiencia.component";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  experiencias: Experiencia[];
  constructor(private experienciaService: ExperienciaService, public _apiService: ApiService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.experienciaService.getExperiencias().subscribe((data: Experiencia[]) => {
      console.log(data);
      this.experiencias = data;
    });
  }

  editItem(experienciaModel: Experiencia) {

    const ref = this.modalService.open(EditExperienciaComponent, { centered: true });
    ref.componentInstance.selectedExperiencia = experienciaModel;

    ref.result.then((yes) => {
        window.location.reload();


      },
      (cancel) => {
        console.log("Cerrar modal");

      })
  }

}
