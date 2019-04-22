import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router} from '@angular/router';
// import { LoginService} from '../login.service';
import { ToastController } from '@ionic/angular';
import { MovieService} from '../movie.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public alertController: AlertController,private router:Router,private _location: Location,public toastController: ToastController,private movieService:MovieService) { }
  data={
    email:'',
    password:''
  }

  ngOnInit() {
    
  }

  res:any={};
  // login(data){
  //   this.movieService.authenticate(data).subscribe((result)=>{console.log(result);
  //     this.res=result;
  //     if(this.res.result.password==data.password){
  //       this.router.navigate(['/tabs/tab1'])
  //     }else{
  //       alert('Wrong Password');
  //       this.presentToast();
  //     }
  //   });
  // }
  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Your settings have been saved.',
  //     duration: 2000
  //   });
  //   toast.present();
  // }



  login(data){
      this.movieService.authenticate(data).subscribe((result)=>{console.log(result);
      this.res=result;
      // localStorage.setItem('customer',JSON.stringify(result))
      if(this.res.result.password==data.password){
        this.router.navigate(['/tabs/tab1'])
      }else{
        //alert("IncorrectDetails");
        this.presentAlert();
        this.data={
          email:'',
          password:''
        }
      }
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      subHeader: 'Please Enter the correct Credentials',
      message: 'Try Logging Again.',
      buttons: ['OK']
    });

    await alert.present();
  }



  movies(){
    this.router.navigate(['/tabs/tab1'])  

  }
  signup(){
    this.router.navigate(['/signup'])  
  }
  goback(){
    this._location.back();
  }
  forgotPassword(){
    this.router.navigate(['/forgotPassword']) ; 

  }
  
}


