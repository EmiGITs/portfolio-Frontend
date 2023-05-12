import {Component, OnInit} from '@angular/core';
import {Educacion} from "../../educacion";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from '@angular/router';
import {EducacionService} from "../../educacion.service";

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit{
  selectedEducacion: Educacion;
  editForm: FormGroup;
  isLoading = false;
  ngOnInit(): void {
    this.setForm();
  }

  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private educacionService: EducacionService, private formBuilder: FormBuilder, private router: Router) {}
  get editFormData() { return this.editForm.controls; }
  private setForm() {


    this.editForm = this.formBuilder.group({
      id: [this.selectedEducacion.id],
      title: [this.selectedEducacion.title, Validators.required],
      subtitle: [this.selectedEducacion.subtitle, Validators.required],
      startdate: [this.selectedEducacion.startdate, Validators.required],
      enddate: [this.selectedEducacion.enddate],
    });
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.educacionService.updateEducacion(this.editForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
  }

}
