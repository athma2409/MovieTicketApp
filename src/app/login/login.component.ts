import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router} from '@angular/router';
// import { LoginService} from '../login.service';
import { ToastController } from '@ionic/angular';
import { MovieService} from '../movie.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private _location: Location,public toastController: ToastController,private movieService:MovieService) { }
  data={
    email:'',
    password:''
  }

  ngOnInit() {
    
  }
  login(data){
    this.movieService.authenticate(data).subscribe((result)=>{console.log(result);
      if(data.result.password==data.password){
        this.router.navigate(['/'])
      }else{
        alert('Wrong Password');
        this.presentToast();
      }
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }
  goback(){
    this._location.back();
  }

  
}


