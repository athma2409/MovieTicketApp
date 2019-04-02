import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router} from '@angular/router';
// import { SignupService } from '../signup.service';
import { MovieService} from '../movie.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
customers={id:'0',name:'',phone:'',email:'',password:'',address:''};

  constructor(private router:Router,private _location: Location,private movieService:MovieService) { }

  ngOnInit() {

  }
  
  register(){
  	this.movieService.addCustomer(this.customers).subscribe(()=>{this.router.navigate(['/']);});
  }


  goback(){
    this._location.back();
  }
 



}
