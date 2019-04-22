import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { BookTicketComponent} from './book-ticket/book-ticket.component';
import { PaymentsComponent} from './payments/payments.component';
import { OffersComponent } from './offers/offers.component';
import { ThankyouComponent} from './thankyou/thankyou.component';



const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'forgotPassword',
    component:ForgotPasswordComponent
  },
  {
    path:'bookTickets/:id',
    component:BookTicketComponent
  },
  {
    path:'done',
    component:ThankyouComponent
  },
  {
    path:'payments',
    component:PaymentsComponent
  },
{
  path:'offers',
  component:OffersComponent
} 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
