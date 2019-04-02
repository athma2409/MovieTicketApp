import { Component } from '@angular/core';
import { Router} from '@angular/router'
import {Location} from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private router:Router,private _location: Location) { }

loginPage(){
this.router.navigate(['/login']);
}


goback(){
  this._location.back();
}

}
