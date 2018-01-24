import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceProvider {
  baseURL: string = 'http://localhost/mampu/';
  authURL: string = 'http://localhost/mampu/auth/api/';  

  constructor(public http: HttpClient) {
    console.log('Hello WebserviceProvider Provider');
  }

  getLogin(user: any): Promise<any>{
    let url = this.authURL + 'login';
    let body = JSON.stringify(user);

    return new Promise((resolve, reject)=>{
      this.http.post(url, body)
      .subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
  }) // end of return new promise


  }

  getStaff(): Promise<any>{
    let url: string = this.baseURL + 'output.php';
    return new Promise((resolve, reject) => {
        this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    })
  }

  saveStaff(staff: any): Promise<any>{
    let url: string = this.baseURL + 'createprofile.php';
    let body = 'name=' + staff.name;
    body += '&company=' + staff.company;
    body += '&icNo=' + staff.icNo;
    body += '&imageurl=' + staff.imageurl;
    
    let header = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise((resolve, reject)=>{
        this.http.post(url, body, {
          headers: header
        }).subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    }) // end of return new promise
  } // end of function save staff

  getWaktuSolat(kodkawasan: string){
    let url = 'https://api.jomgeek.com/v1/waktusolat/?k=4sJlhXfZFLBowwWx&a='+kodkawasan;

    return new Promise((resolve, reject) => {
      this.http.get(url)
      .subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      })
    })

  }

}
