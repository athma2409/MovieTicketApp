import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router} from '@angular/router'

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {

  constructor(private router:Router,private _location: Location) { }

  ngOnInit() {}

  goback(){
    this._location.back();
  }
  done(){
    this.router.navigate(['/done']);
  }

}
