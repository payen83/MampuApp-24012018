import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { WebserviceProvider } from '../../providers/webservice/webservice';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  areaList: Array<any>;
  kodkawasan: string;
  tarikh: string;
  waktusolat: any;
  kawasan: string;

  constructor(public loadingCtrl: LoadingController, public webservice: WebserviceProvider, public navCtrl: NavController) {
    this.areaList = [
      {nama: "Shah Alam", kod: "SGR01"},
      {nama: "Seremban", kod: "NGS02"},
      {nama: "Ipoh", kod: "PRK02"},
      {nama: "Alor Setar", kod: "KDH01"},
      {nama: "Kuantan", kod: "PHG02"}
    ];

    this.waktusolat = {
      Subuh: undefined,
      Zohor: undefined,
      Asar: undefined,
      Magrib: undefined,
      Isyak: undefined
    }

    console.log(this.areaList);
  }

  check(){
    if(this.kodkawasan){

      for(let area of this.areaList){
        if (this.kodkawasan == area.kod){
          this.kawasan = area.nama;
        };
      }

      let loader = this.loadingCtrl.create({
        content: "Sila tunggu..."
      });

      loader.present();

      this.webservice.getWaktuSolat(this.kodkawasan).then(response => {
        console.log(response);
        let res: any = response;
        this.tarikh = res.data.date;
        this.waktusolat = res.data.item;
        loader.dismiss();
      }).catch(error => {
        alert(JSON.stringify(error));
        loader.dismiss();
      })
    } else{
      alert('Sila pilih kawasan');
    }
    
  }

}
