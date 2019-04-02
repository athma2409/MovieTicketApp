import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router} from '@angular/router'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router,private _location: Location) { }

  ngOnInit() {}

  goback(){
    this._location.back();
  }

  getUserDetails(){

  }
  getOTP(){
    alert('54321');
  }

}
