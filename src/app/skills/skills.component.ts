import {Component, OnInit} from '@angular/core';
import {Skill} from "../skill";
import {SkillService} from "../skill.service";
import {ApiService} from "../api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditSkillComponent} from "../PopUp/edit-skill/edit-skill.component";
import {CreateSkillComponent} from "../PopUp/create-skill/create-skill.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills: Skill[];
  constructor(private skillService: SkillService, public _apiService: ApiService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((data: Skill[]) => {
      this.skills = data;
    });
  }

  editItem(skillModel: Skill) {

    const ref = this.modalService.open(EditSkillComponent, { centered: true });
    ref.componentInstance.selectedSkill = skillModel;

    ref.result.then((yes) => {
       this.setSkillsList();


      },
      (cancel) => {
        console.log("Cerrar modal");

      })
  }


  deleteItem(skillModel: Skill) {

    this.skillService.deleteSkillById(skillModel.id).subscribe(x => this.setSkillsList());
  }

  createItem() {

    const ref = this.modalService.open(CreateSkillComponent, { centered: true });


    ref.result.then((yes) => {
        this.setSkillsList();


      },
      (cancel) => {
        console.log("Cerrar modal");

      })
  }

  private setSkillsList() {
    this.skillService.getSkills().subscribe(x => {
      this.skills = x;
    })
  }
}
