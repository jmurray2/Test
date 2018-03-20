import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login-page/login-page';


@Component({
  selector: 'create-account-page-ionic',
  templateUrl: 'create-account-page.html'
})
export class CreateAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public createAccount(username,email,password)
  {
      //API call
      this.navCtrl.setRoot(LoginPage);
  }
}