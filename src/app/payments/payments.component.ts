import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router} from '@angular/router'
declare var RazorpayCheckout:any;

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {

  constructor(private router:Router,private _location: Location) { }

  ngOnInit() {}
    ionViewWillEnter(){
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_ZIpia1muENjWvU',
      //order_id: 'order_7HtFNLS98dSj8x',
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'pranav@razorpay.com',
        contact: '8879524924',
        name: 'Pranav Gupta'
      },
      theme: {
        color: '#F37254'
      }
    }
    
    var successCallback = function(success) {
      alert('payment_id: ' + success.razorpay_payment_id)
      var orderId = success.razorpay_order_id
      var signature = success.razorpay_signature
    }
    
    var cancelCallback = function(error) {
      alert(error.description + ' (Error '+error.code+')')
    }
    
    RazorpayCheckout.on('payment.success', successCallback)
    RazorpayCheckout.on('payment.cancel', cancelCallback)
    RazorpayCheckout.open(options)
  
  
  }


  goback(){
    this._location.back();
  }
  done(){
    this.router.navigate(['/done']);
  }

}
