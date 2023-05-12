import {Component, OnInit} from '@angular/core';
import {Skill} from "../../skill";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from '@angular/router';
import {SkillService} from "../../skill.service";

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit{
  selectedSkill: Skill;
  createForm: FormGroup;
  isLoading = false;
  ngOnInit(): void {
    this.setForm();
  }

  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private skillService: SkillService, private formBuilder: FormBuilder, private router: Router) {}
  get createFormData() { return this.createForm.controls; }
  private setForm() {


    this.createForm = this.formBuilder.group({
      id: [""],
      title: ["",Validators.required],
      description: ["",Validators.required],
      total: ["",Validators.required],
    });
  }

  onSubmit() {
    if (this.createForm.invalid || this.isLoading) {
      return;
    }
    console.log(this.createForm);
    this.isLoading = true;
    this.skillService.createSkill(this.createForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
  }
}
