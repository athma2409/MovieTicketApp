import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http} from '@angular/http';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {



  customers={id:'0',name:'',phone:'',email:'',password:'',address:''};



  private customerUrl="http://localhost:3000/api/customers";

  constructor( private http: HttpClient) { }


addRemoteCustomer(customer):Observable<any>{
  return this.http.post(this.customerUrl,customer);
}
}
