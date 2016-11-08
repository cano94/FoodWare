import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { FirmsPage } from '../firms/firms';
export var LoginPage = (function () {
    function LoginPage(navCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    /* ionViewDidLoad() {
         if(this.authService.checkPreviousAuthorization()){
              this.showLoader();
              this.navCtrl.setRoot(FirmsPage);
              this.loading.dismiss();
              }
     }*/
    LoginPage.prototype.login = function () {
        var _this = this;
        var credentials = [this.username, this.password, this.firm];
        this.authService.login(credentials)
            .subscribe(function (data) {
            _this.response = data.login;
            if (_this.response) {
                window.localStorage.setItem('username', credentials[0]);
                window.localStorage.setItem('password', credentials[1]);
                _this.navCtrl.setRoot(FirmsPage);
            }
            else {
                _this.showToast();
            }
        }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    LoginPage.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Lütfen bilgilerinizi kontrol edin',
            duration: 3000,
            position: 'bottom'
        });
        toast.present(toast);
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.decorators = [
        { type: Component, args: [{
                    selector: 'login-page',
                    templateUrl: 'login-page.html'
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = [
        { type: NavController, },
        { type: Auth, },
        { type: LoadingController, },
        { type: ToastController, },
    ];
    return LoginPage;
}());
