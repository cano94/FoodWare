import { Component } from '@angular/core';
import { FirmService } from '../../providers/getFirms';
import { ReportsPage } from '../report/report';
import { OldReports } from '../old-reports/old-reports';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login-page/login-page';
import { NavController, AlertController, LoadingController, NavParams, ToastController } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

/*
  Generated class for the Firms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-firms',
  templateUrl: 'firms.html'
})
export class FirmsPage {
  langs;
  langForm;
  loading: any;
  username: string;
  firms: any;
  previous: any;
  msg: any;
  testRadioOpen: boolean;
  testRadioResult;




  constructor(public navCtrl: NavController, private navParams: NavParams, public firmService: FirmService, public loadingCtrl: LoadingController, public authService: Auth, private toastCtrl: ToastController, public alerCtrl: AlertController) {
    //this.firms = this.navParams.get('param');
    this.username = window.localStorage.getItem('username');
    this.getMsg();
    this.getFirms();
    this.langForm = new FormGroup({
      "langs": new FormControl('')
    });
  }


  ionViewDidLoad() {
    console.log('Hello FirmsPage');
  }

  getFirms() {
    this.presentLoading();
    this.firmService.getFirms()
      .subscribe(
      data => {
        this.firms = data.subeler;
        window.localStorage.setItem(this.firms[0].id, this.firms[0].adi);
        window.localStorage.setItem(this.firms[1].id, this.firms[1].adi);
        window.localStorage.setItem(this.firms[2].id, this.firms[2].adi);
      },
      error => alert(error),
      () => console.log("firmalar çekildi")
      );
  }

  getMsg() {
    this.previous = this.navCtrl.getPrevious();
    if (this.previous == 'undefined' || this.previous == null) {
      this.msg = "Hoşgeldin " + window.localStorage.getItem('username');
    } else {
      this.msg = "Firmalar görüntüleniyor";
    }
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: this.msg,
      duration: 700,
      dismissOnPageChange: false

    });
    this.loading.present();
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Lütfen bir şube seçiniz',
      duration: 3000,
      position: 'bottom'
    });

    toast.present(toast);
  }


  logout(): void {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  doRadio() {
    if (this.langForm.value.langs.length == 0) {
      this.showToast();
    } else {
      let alert = this.alerCtrl.create();
      alert.setTitle('Lütfen görüntülemek istediğiniz rapor türünü seçiniz');

      alert.addInput({
        type: 'radio',
        label: 'Geçmiş tarihli raporlar',
        value: 'old',
        checked: true
      });

      alert.addInput({
        type: 'radio',
        label: 'Bugünün raporları',
        value: 'today'
      });

      alert.addButton('İptal et');
      alert.addButton({
        text: 'Görüntüle',
        handler: data => {
          console.log('Radio data:', data);
          this.testRadioOpen = false;
          this.testRadioResult = data;
          if (this.testRadioResult == 'today') {
            this.navCtrl.push(ReportsPage, { param: this.langForm.value.langs }, { animate: true, direction: 'back' });
          } else {
            this.navCtrl.push(OldReports, { animate: true, direction: 'back' })
          }
        }
      });

      alert.present().then(() => {
        this.testRadioOpen = true;
      });
    }
  }
}




