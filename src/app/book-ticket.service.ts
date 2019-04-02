import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookTicketService {

  bookings={customer_id:78,city:'bangalore',movie_id:1,movie_name:'Billa',movie_time:'4',theatre :'abc',screen:'screen3',tickets:3,movie_date:'2019-10-10',amount:456,ticket_price:23,date:'2019-10-10'};
  
  private bookingUrl="http://localhost:3000/api/booking";
  private movieUrl = 'http://192.168.0.35:3000/api/movies';

  constructor( private http: HttpClient) { }

  addRemoteBooking(booking):Observable<any>{
    console.log('hello');
  	return this.http.post(this.bookingUrl,booking);
 }


 addBooking(booking):Observable<any>{
return this.http.post(this.bookingUrl,booking);

 }

 getMovieById(id): Observable<any> {
  return this.http.get<[]>(this.movieUrl + "/" + id)
}

getMovies(): Observable<[]> {
  return this.http.get<[]>(this.movieUrl);
  }


}
