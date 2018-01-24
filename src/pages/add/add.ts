import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  staff: {name: string, company: string, imageurl: string, icNo: string};

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.staff = {name: undefined, company: undefined, imageurl: undefined, icNo: undefined}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  save(){
    if(this.staff.name && this.staff.company && this.staff.icNo && this.staff.imageurl){
      this.viewCtrl.dismiss({item: this.staff})
    } else {
      alert('Please insert all fields');
    }
    
  }

}
