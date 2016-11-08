import { Component } from '@angular/core';
import { FirmService } from '../../providers/getFirms';
import { Auth } from '../../providers/auth';
import {LoginPage} from '../login-page/login-page';
import {FirmsPage} from '../firms/firms';
import { NavController, ModalController, AlertController, LoadingController,NavParams } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

/*
  Generated class for the Report page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportsPage {

  sales: any[];
  collectings: any[];
  summary: any[];
  products: any[];
  loading: any;
  firmId: string;
  firmName:string;
  

  constructor(public navCtrl: NavController, private navParams: NavParams, public firmService: FirmService, public loadingCtrl: LoadingController, public authService: Auth) {
    this.firmId = this.navParams.get("param");
    this.firmName = window.localStorage.getItem(this.firmId);
    this.getReports();
  }


 ionViewDidLoad() {
  
    }

  getReports(){
       this.firmService.getReports(this.firmId)
       .subscribe(
           data => {
             this.sales = data.satis;
             this.collectings = data.tahsilat;
             this.summary = data.ozet;
             this.products = data.urunler;
             console.log(this.sales);
           },
           error => alert(error),
           () => console.log("Finished")
       );
    }

     showLoader(){
 
        let loading = this.loadingCtrl.create({
            content: 'Loading...',
            dismissOnPageChange: true,
            duration: 3000
        });
 
        loading.present();
    }

    logout(): void { 
  	this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
     
	} 

  getSalesSum():number{
    let sum = 0.0;
    for(let x of this.sales){
         sum+=x.tutar;
     }
     return sum;
  }

  getCollectingsSum():number{
    let sum = 0.0;
    for(let x of this.collectings){
         sum+=x.tutar;
     }
     return sum;
  }

  getSummarySum():number{
    let sum = 0.0;
    for(let x of this.summary){
         sum+=x.tutar;
     }
     return sum;
  }

  getProductsSum():number{
    let sum = 0.0;
    for(let x of this.products){
         sum+=x.tutar;
     }
     return sum;
  }
 
 
   goBack(){
    this.navCtrl.push(FirmsPage);
  }

}
