import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {BehaviorSubject, map, Observable, pipe} from "rxjs";
import {Credentials} from "./credentials";
import {Router} from "@angular/router";
import {Persona} from "./persona";


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
    return this.http.post('https://portfolio-backend-production-748d.up.railway.app/login', creds, {
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

  uploadFile(formData: FormData): Observable<any>{
    return this.http.post('https://portfolio-backend-production-748d.up.railway.app/media/api/upload', formData);
  }

}
