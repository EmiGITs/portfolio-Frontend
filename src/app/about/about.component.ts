import {Component, OnInit} from '@angular/core';
import {Persona} from "../persona";
import {PersonaService} from "../persona.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  personas: Persona[];
  constructor(private personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((data: Persona[]) => {
      this.personas = data;
    });
  }
}
