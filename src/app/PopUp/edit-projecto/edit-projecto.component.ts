import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Projecto} from "../../projecto";
import {ProjectoService} from "../../projecto.service";

@Component({
  selector: 'app-edit-projecto',
  templateUrl: './edit-projecto.component.html',
  styleUrls: ['./edit-projecto.component.css']
})
export class EditProjectoComponent  implements OnInit{
  selectedProjecto: Projecto;
  editForm: FormGroup;

  isLoading = false;
  ngOnInit(): void {
    this.setForm();
  }

  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private projectoService: ProjectoService, private formBuilder: FormBuilder, private router: Router) {}
  get editFormData() { return this.editForm.controls; }
  private setForm() {


    this.editForm = this.formBuilder.group({
      id: [this.selectedProjecto.id],
      title: [this.selectedProjecto.title, Validators.required],
      link: [this.selectedProjecto.link, Validators.required],
      description: [this.selectedProjecto.description, Validators.required],
    });
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.projectoService.updateProjecto(this.editForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
  }
}
