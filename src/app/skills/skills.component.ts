import {Component, OnInit} from '@angular/core';
import {Skill} from "../skill";
import {SkillService} from "../skill.service";
import {ApiService} from "../api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditSkillComponent} from "../PopUp/edit-skill/edit-skill.component";

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
        window.location.reload();


      },
      (cancel) => {
        console.log("Cerrar modal");

      })
  }
}
