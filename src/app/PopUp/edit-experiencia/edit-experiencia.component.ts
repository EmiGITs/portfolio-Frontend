import {Component, OnInit} from '@angular/core';
import {Experiencia} from "../../experiencia";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from '@angular/router';
import {ExperienciaService} from "../../experiencia.service";

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  selectedExperiencia: Experiencia;
  editForm: FormGroup;
  isLoading = false;
  ngOnInit(): void {
    this.setForm();
  }

  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private experienciaService: ExperienciaService, private formBuilder: FormBuilder, private router: Router) {}
  get editFormData() { return this.editForm.controls; }
  private setForm() {


    this.editForm = this.formBuilder.group({
      id: [this.selectedExperiencia.id],
      title: [this.selectedExperiencia.title, Validators.required],
      subtitle: [this.selectedExperiencia.subtitle, Validators.required],
      location: [this.selectedExperiencia.location, [Validators.required]],
      startdate: [this.selectedExperiencia.startdate, Validators.required],
      enddate: [this.selectedExperiencia.enddate],
    });
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.experienciaService.updateExperiencia(this.editForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
  }
}
