import {Component, OnInit} from '@angular/core';
import {Skill} from "../skill";
import {SkillService} from "../skill.service";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills: Skill[];
  constructor(private skillService: SkillService, public _apiService: ApiService) {
  }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((data: Skill[]) => {
      this.skills = data;
    });
  }
}
