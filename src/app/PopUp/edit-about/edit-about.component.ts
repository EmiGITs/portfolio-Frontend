import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Persona} from "../../persona";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {PersonaService} from "../../persona.service";

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit{
  selectedPersona: Persona;
  editForm: FormGroup;
  isLoading = false;
  ngOnInit(): void {
    this.setForm();
  }

  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private personaService: PersonaService, private formBuilder: FormBuilder, private router: Router) {}

  get editFormData() { return this.editForm.controls; }
  private setForm() {


    this.editForm = this.formBuilder.group({
      id: [this.selectedPersona.id],
      title: [this.selectedPersona.title, Validators.required],
      subtitle: [this.selectedPersona.subtitle, Validators.required],
      location: [this.selectedPersona.location, [Validators.required]],
      insignia: [this.selectedPersona.insignia, Validators.required],
      about: [this.selectedPersona.about, Validators.required],
    });
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.personaService.updatePersona(this.editForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
  }


}
