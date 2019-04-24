import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router} from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  // constructor(private router:Router,private _location: Location) { }

  // ngOnInit() {}

  // goback(){
  //   this._location.back();
  // }

  // getUserDetails(){

  // }
  // getOTP(){
  //   alert('54321');
  // }






  customer={phone:'',password:''}
  password:any={};

  constructor(private router: Router,private movieService: MovieService,private _location: Location) { }

  ngOnInit() {
  }
    reset(){
       this.movieService.getRemoteCustomerPassword(this.customer.phone).subscribe((customer)=>{
         this.password=customer.password;  
         console.log(customer);

         //alert('your password is : '+ this.password[0].password);
        // this.router.navigate(['/login'])


       });
    }
  
  goback(){
    this._location.back();
  }

    forget(){
      this.router.navigate(['/forgotPassword'])
    }
    register(){
      this.router.navigate(['/signup'])
    }
}


