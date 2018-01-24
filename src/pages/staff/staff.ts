import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { WebserviceProvider } from '../../providers/webservice/webservice';

@IonicPage()
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
})
export class StaffPage {
  staffList: Array<any>
  constructor(public modalCtrl: ModalController, public webservice: WebserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //present loading controller
    this.webservice.getStaff().then(response => {
      //dismiss loadingctrl
      console.log(response);
      this.staffList = response.person;
    }).catch(err => {
      console.log(JSON.stringify(err));
    })
  }

  pageDetail(staff: any){
    this.navCtrl.push('DetailPage', {item: staff});
  }

  pageAdd(){
    let modal = this.modalCtrl.create('AddPage');
    modal.present();

    modal.onDidDismiss(data => {
      if(data) {
        let staff = data.item;
        console.log(staff);

        this.webservice.saveStaff(staff).then(response => {
          if(response.success == 1){
            console.log('Data saved successfully')
            //this.staffList.push(staff);
          } else {
            console.log(response.message);
          }
        }).catch(error => {
            console.log('Error: ' + error);
        })
      }

    });
  }

  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);
    this.ionViewDidLoad();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
