import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login-page/login-page';

@Component({
  selector: 'user-page-ionic',
  templateUrl: 'user-page.html'
})
export class UserPage{
    user: {firstName:string , lastName:string , addresses: Array<string> , billingInfo: string };
    constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
        this.user = ({
            firstName: 'Jon',
            lastName: 'Murray',
            addresses: new Array("1234 Street City"),
            billingInfo: '98765'
        });
        console.log(this.user.firstName);
    }

    public addAddress()
    {
        let alert = this.alertCtrl.create({
            title: 'Add Address',
            inputs: [
                {
                    name: 'Street',
                    placeholder: 'Street'
                },
                {
                    name: 'City',
                    placeholder: 'City'
                },
                {
                    name: 'State',
                    placeholder: 'State'
                },
                {
                    name: 'Zip',
                    placeholder: 'Zip'
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: data => {
                        this.user.addresses.push(data.Street + " " + data.City + " " + data.State + " " + data.Zip);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        
        alert.present();
    }

    public signOut()
    {
        let alert = this.alertCtrl.create({
            message: "Are you sure you want to sign out?",
            buttons: [
                {
                    text: 'Yes',
                    handler: data => {
                        this.navCtrl.setRoot(LoginPage)
                    }
                },
                {
                    text: 'No',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    }

    public deleteAccount()
    {
        let alert = this.alertCtrl.create({
            message: "Are you sure you want to delete your account? You will no longer be able to sign in.",
            buttons: [
                {
                    text: 'Yes',
                    handler: data => {
                        this.navCtrl.setRoot(LoginPage)
                    }
                },
                {
                    text: 'No',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    }
}