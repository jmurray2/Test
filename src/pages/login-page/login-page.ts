import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainMenu } from '../main-menu/main-menu'
import { AlertController } from 'ionic-angular';
import { CreateAccountPage } from '../create-account-page/create-account-page'

@Component({
  selector: 'login-page-ionic',
  templateUrl: 'login-page.html'
})
export class LoginPage {

    constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  
    }

  public signIn(username , password)
  {
      if(username == "Jon" && password == "test")
      {
          this.navCtrl.setRoot(MainMenu);
      }
      else{
          let alert = this.alertCtrl.create({
              message: "Username or Login is incorrect. Please try again.",
              buttons:[ {

              
                  text: "Ok",
                  role: "cancel"
              }]
          });
          alert.present();
      }
  }

  public createAccount()
  {
      this.navCtrl.push(CreateAccountPage);
  }
}