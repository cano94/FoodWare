import { Component } from '@angular/core';
import { FirmService } from '../../providers/getFirms';
import { ReportsPage } from '../report/report';
import { OldReports } from '../old-reports/old-reports';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login-page/login-page';
import { NavController, AlertController, LoadingController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
/*
  Generated class for the Firms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var FirmsPage = (function () {
    function FirmsPage(navCtrl, navParams, firmService, loadingCtrl, authService, toastCtrl, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firmService = firmService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.alerCtrl = alerCtrl;
        //this.firms = this.navParams.get('param');
        this.username = window.localStorage.getItem('username');
        this.getMsg();
        this.getFirms();
        this.langForm = new FormGroup({
            "langs": new FormControl('')
        });
    }
    FirmsPage.prototype.ionViewDidLoad = function () {
        console.log('Hello FirmsPage');
    };
    FirmsPage.prototype.getFirms = function () {
        var _this = this;
        this.presentLoading();
        this.firmService.getFirms()
            .subscribe(function (data) {
            _this.firms = data.subeler;
            window.localStorage.setItem(_this.firms[0].id, _this.firms[0].adi);
            window.localStorage.setItem(_this.firms[1].id, _this.firms[1].adi);
            window.localStorage.setItem(_this.firms[2].id, _this.firms[2].adi);
        }, function (error) { return alert(error); }, function () { return console.log("firmalar çekildi"); });
    };
    FirmsPage.prototype.getMsg = function () {
        this.previous = this.navCtrl.getPrevious();
        if (this.previous == 'undefined' || this.previous == null) {
            this.msg = "Hoşgeldin " + window.localStorage.getItem('username');
        }
        else {
            this.msg = "Firmalar görüntüleniyor";
        }
    };
    FirmsPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: this.msg,
            duration: 700,
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    FirmsPage.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Lütfen bir şube seçiniz',
            duration: 3000,
            position: 'bottom'
        });
        toast.present(toast);
    };
    FirmsPage.prototype.logout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(LoginPage);
    };
    FirmsPage.prototype.doRadio = function () {
        var _this = this;
        if (this.langForm.value.langs.length == 0) {
            this.showToast();
        }
        else {
            var alert_1 = this.alerCtrl.create();
            alert_1.setTitle('Lütfen görüntülemek istediğiniz rapor türünü seçiniz');
            alert_1.addInput({
                type: 'radio',
                label: 'Geçmiş tarihli raporlar',
                value: 'old',
                checked: true
            });
            alert_1.addInput({
                type: 'radio',
                label: 'Bugünün raporları',
                value: 'today'
            });
            alert_1.addButton('İptal et');
            alert_1.addButton({
                text: 'Görüntüle',
                handler: function (data) {
                    console.log('Radio data:', data);
                    _this.testRadioOpen = false;
                    _this.testRadioResult = data;
                    if (_this.testRadioResult == 'today') {
                        _this.navCtrl.push(ReportsPage, { param: _this.langForm.value.langs }, { animate: true, direction: 'back' });
                    }
                    else {
                        _this.navCtrl.push(OldReports, { animate: true, direction: 'back' });
                    }
                }
            });
            alert_1.present().then(function () {
                _this.testRadioOpen = true;
            });
        }
    };
    FirmsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-firms',
                    templateUrl: 'firms.html'
                },] },
    ];
    /** @nocollapse */
    FirmsPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: FirmService, },
        { type: LoadingController, },
        { type: Auth, },
        { type: ToastController, },
        { type: AlertController, },
    ];
    return FirmsPage;
}());
