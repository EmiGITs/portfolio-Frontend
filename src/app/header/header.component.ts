import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  token: string;
  ngOnInit(){
    this.token = this.readLocalStorageValue('token');
  }

  readLocalStorageValue(key: string): string {
    // @ts-ignore
    return localStorage.getItem(key);
  }
}
