import {Component, OnInit} from '@angular/core';
import {Educacion} from "../../educacion";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from '@angular/router';
import {EducacionService} from "../../educacion.service";

@Component({
  selector: 'app-create-educacion',
  templateUrl: './create-educacion.component.html',
  styleUrls: ['./create-educacion.component.css']
})
export class CreateEducacionComponent implements OnInit{
  selectedEducacion: Educacion;
  createForm: FormGroup;
  isLoading = false;
  ngOnInit(): void {
    this.setForm();
  }

  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private educacionService: EducacionService, private formBuilder: FormBuilder, private router: Router) {}
  get createFormData() { return this.createForm.controls; }
private setForm() {


    this.createForm = this.formBuilder.group({
      id: [""],
      title: ["",Validators.required],
      subtitle: ["",Validators.required],
      startdate: ["2023-01-01T03:00:00.000+00:00",Validators.required],
      enddate: [""],
    });
  }

  onSubmit() {
    if (this.createForm.invalid || this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.educacionService.createEducacion(this.createForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
  }
}
