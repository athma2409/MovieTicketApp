import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { FormsModule} from '@angular/forms';


import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { PaymentsComponent} from './payments/payments.component';
import { OffersComponent } from './offers/offers.component';
import { ThankyouComponent} from './thankyou/thankyou.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent,BookTicketComponent,LoginComponent,SignupComponent,ForgotPasswordComponent,
    PaymentsComponent,OffersComponent,ThankyouComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),   HttpModule,MatButtonToggleModule,MatCheckboxModule,
    HttpClientModule, AppRoutingModule,FormsModule,MatInputModule,MatCardModule, BrowserAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
