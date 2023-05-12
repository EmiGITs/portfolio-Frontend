import {Component, OnInit} from '@angular/core';
import {Persona} from "../persona";
import {PersonaService} from "../persona.service";
import {ApiService} from "../api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditAboutComponent} from "../PopUp/edit-about/edit-about.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  personas: Persona[];
  constructor(private personaService: PersonaService, public _apiService: ApiService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((data: Persona[]) => {
      this.personas = data;
    });
  }

  editItem(personaModel: Persona) {

    const ref = this.modalService.open(EditAboutComponent, { centered: true });
    ref.componentInstance.selectedPersona = personaModel;

    ref.result.then((yes) => {
        this.setPersonaList();


      },
      (cancel) => {
        console.log("Cerrar modal");

      })
  }


  private setPersonaList() {
    this.personaService.getPersonas().subscribe(x => {
      this.personas = x;
    })
  }
}
