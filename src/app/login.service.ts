import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
    
  private loginUrl='http://192.168.0.35:3000/api/login';
  
  authenticate(data){
    return this.http.post(this.loginUrl,data);
  }
}
