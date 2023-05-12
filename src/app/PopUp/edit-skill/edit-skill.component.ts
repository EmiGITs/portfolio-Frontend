import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Skill} from "../../skill";
import {SkillService} from "../../skill.service";

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit{
  selectedSkill: Skill;
  editForm: FormGroup;
  isLoading = false;
  ngOnInit(): void {
    this.setForm();
  }

  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private skillService: SkillService, private formBuilder: FormBuilder, private router: Router) {}
  get editFormData() { return this.editForm.controls; }
  private setForm() {


    this.editForm = this.formBuilder.group({
      id: [this.selectedSkill.id],
      title: [this.selectedSkill.title, Validators.required],
      total: [this.selectedSkill.total, Validators.required],
      description: [this.selectedSkill.description, Validators.required],
    });
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.skillService.updateSkill(this.editForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
  }
}
