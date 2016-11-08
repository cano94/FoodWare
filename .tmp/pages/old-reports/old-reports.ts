import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the OldReports page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-old-reports',
  templateUrl: 'old-reports.html'
})
export class OldReports {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OldReports Page');
  }

}
