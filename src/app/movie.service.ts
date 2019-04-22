import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  private moviesUrl = 'http://localhost:3000/api/movies';
  private bookingUrl= 'http://localhost:3000/api/booking';
  private customerUrl = 'http://localhost:3000/api/customers';
  private loginUrl = 'http://localhost:3000/api/login'
  getMovies(): Observable<[]>{
    return this.http.get<[]>(this.moviesUrl);     
  }
  getMovieById(id):Observable<any>{
    return this.http.get<[]>(this.moviesUrl + "/"+id);
  }
  addBooking(booking):Observable<any>{
    console.log(">> addBooking:" +JSON.stringify(booking));
    return this.http.post(this.bookingUrl,booking);
  }
  addCustomer(customer):Observable<any>{
    return this.http.post(this.customerUrl,customer)
  }
  authenticate(data){
    return this.http.post(this.loginUrl,data);
  }
  
 
}
