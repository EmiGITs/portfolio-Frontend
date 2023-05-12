import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  token: string;


  constructor(public _apiService: ApiService){}
}
