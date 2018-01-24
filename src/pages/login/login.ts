import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebserviceProvider } from '../../providers/webservice/webservice';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {username: undefined, password: undefined};

  constructor(public webservice: WebserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.webservice.getLogin(this.user).then(response => {
      if(response.userData){
         this.navCtrl.setRoot(TabsPage, {}, {animate: true});
        localStorage.setItem('USERDATA', JSON.stringify(response.userData));
      } else if(response.error){
        alert('Invalid Login: '+JSON.stringify(response.error));
      } else {
        alert('Unknown Error');
      }
    }).catch(err=>{
      alert('Error: '+ JSON.stringify(err));
    })
  }



}
