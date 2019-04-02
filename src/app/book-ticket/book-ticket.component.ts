import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router} from '@angular/router';
import { MovieService} from '../movie.service';
// import { BookTicketService} from '../book-ticket.service';
import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss'],
})
export class BookTicketComponent implements OnInit {

  constructor(private router:Router,private _location: Location,private route:ActivatedRoute, private movieService:MovieService) { }

movie:any;
private sub:any;

id:number;

data={
  tickets:0
}
// movies={
//   customer_id:0,
//   tickets:0,
//   movie_id:0,
//   movie_name:'',
//   movie_time:'',
//   theatre:'',
//   screen:'',
//   city:'',
//   movie_date:'',
//   date:'',
//   amount:0,
//   ticket_price:0
// };
ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
  this.id = +params['id']; // (+) converts string 'id' to a number
     console.log("id is "+this.id);
     this.movieService.getMovieById(this.id).subscribe((movie)=>{
       this.movie=movie;
       console.log(this.movie);
     })
  });
}

amount=this.data.tickets*50
addBooking(movie,t){
  console.log(movie,t);
  var movies={
  customer_id:2,
  tickets:t,
  movie_id:movie.id,
  movie_name:movie.name,
  movie_time:'12:50',
  theatre:'Cinepolis Meenakshi Mall',
  screen:'Screen 2',
  city:'Bangalore',
  movie_date:'2019-05-07',
  date:'2019-03-27',
  amount:this.amount,
  ticket_price:50
  }
  console.log('data sent====>',this.addBooking)
  this.movieService.addBooking(movies).subscribe((e)=>{console.log(JSON.stringify(e));
  this.router.navigate(['/payments']);
  });
}
  goback(){
    this._location.back();
  }

  // bookTickets(){
  // 	this.movieService.addRemoteCustomer(this.customer).subscribe(()=>{this.router.navigate(['/list-customer']);});
  // }

// payments(){
//   this.router.navigate(['/payments']);
// }
// bookings={customer_id:78,city:'bangalore',movie_id:1,movie_name:'Billa',movie_time:'4',theatre :'abc',screen:'screen3',tickets:3,movie_date:'2019-10-10',amount:456,ticket_price:23,date:'2019-10-10'};

// addBooking(){
//   this.bookTicketService.addRemoteBooking(this.bookings).subscribe(()=>{this.router.navigate(['/payments']);});
// }
}
