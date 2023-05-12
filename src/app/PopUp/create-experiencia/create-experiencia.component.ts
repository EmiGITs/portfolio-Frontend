import {Component, OnInit} from '@angular/core';
import {Experiencia} from "../../experiencia";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from '@angular/router';
import {ExperienciaService} from "../../experiencia.service";

@Component({
  selector: 'app-create-experiencia',
  templateUrl: './create-experiencia.component.html',
  styleUrls: ['./create-experiencia.component.css']
})
export class CreateExperienciaComponent implements OnInit{
  selectedExperiencia: Experiencia;
  createForm: FormGroup;
  isLoading = false;
  ngOnInit(): void {
    this.setForm();
  }

  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private experienciaService: ExperienciaService, private formBuilder: FormBuilder, private router: Router) {}
  get createFormData() { return this.createForm.controls; }
  private setForm() {


    this.createForm = this.formBuilder.group({
      id: [""],
      title: ["",Validators.required],
      subtitle: ["",Validators.required],
      location: ["",Validators.required],
      startdate: ["2023-01-01T03:00:00.000+00:00",Validators.required],
      enddate: [""],
    });
  }

  onSubmit() {
    if (this.createForm.invalid || this.isLoading) {
      return;
    }
    console.log(this.createForm);
    this.isLoading = true;
    this.experienciaService.createExperiencia(this.createForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
  }
}
