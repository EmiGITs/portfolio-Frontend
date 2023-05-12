import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, pipe} from "rxjs";
import {Credentials} from "./credentials";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private _router: Router
  ) {
  }

  login(creds: Credentials){
    return this.http.post('http://localhost:8000/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ','');

      localStorage.setItem('token',token);
      return body;
    }))
  }

  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }


  getToken(){
    return localStorage.getItem('token');
  }

}
