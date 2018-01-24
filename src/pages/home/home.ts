import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eventList: Array<any>;

  constructor(public app: App, public navCtrl: NavController) {
    this.eventList = [
      {title: "Perhimpunan Bulanan", location: "Auditorium", date: "23/01/2018"},
      {title: "Mesyuarat Kakitangan", location: "Meeting room 1", date: "24/01/2018"},
      {title: "Jamuan CNY", location: "Tingkat 5", date: "18/02/2018"}
    ];
  }

  logout(){
    localStorage.removeItem('USERDATA');
    console.log('logout');
    this.app.getRootNav().setRoot('LoginPage', {}, {animate: true});
  }

}
