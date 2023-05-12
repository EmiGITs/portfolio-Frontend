import {Component, OnInit} from '@angular/core';
import {Projecto} from "../../projecto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectoService} from "../../projecto.service";

@Component({
  selector: 'app-create-projecto',
  templateUrl: './create-projecto.component.html',
  styleUrls: ['./create-projecto.component.css']
})
export class CreateProjectoComponent implements OnInit{
  selectedProjecto: Projecto;
  createForm: FormGroup;
  isLoading = false;
  ngOnInit(): void {
    this.setForm();
  }

  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private projectoService: ProjectoService, private formBuilder: FormBuilder, private router: Router) {}
  get createFormData() { return this.createForm.controls; }
  private setForm() {


    this.createForm = this.formBuilder.group({
      id: [""],
      title: ["",Validators.required],
      description: ["",Validators.required],
      link: ["",Validators.required],
    });
  }

  onSubmit() {
    if (this.createForm.invalid || this.isLoading) {
      return;
    }
    console.log(this.createForm);
    this.isLoading = true;
    this.projectoService.createProjecto(this.createForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
  }
}
