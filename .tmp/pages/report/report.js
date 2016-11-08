import { Component } from '@angular/core';
import { FirmService } from '../../providers/getFirms';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login-page/login-page';
import { FirmsPage } from '../firms/firms';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
/*
  Generated class for the Report page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ReportsPage = (function () {
    function ReportsPage(navCtrl, navParams, firmService, loadingCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firmService = firmService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.firmId = this.navParams.get("param");
        this.firmName = window.localStorage.getItem(this.firmId);
        this.getReports();
    }
    ReportsPage.prototype.ionViewDidLoad = function () {
    };
    ReportsPage.prototype.getReports = function () {
        var _this = this;
        this.firmService.getReports(this.firmId)
            .subscribe(function (data) {
            _this.sales = data.satis;
            _this.collectings = data.tahsilat;
            _this.summary = data.ozet;
            _this.products = data.urunler;
            console.log(_this.sales);
        }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    ReportsPage.prototype.showLoader = function () {
        var loading = this.loadingCtrl.create({
            content: 'Loading...',
            dismissOnPageChange: true,
            duration: 3000
        });
        loading.present();
    };
    ReportsPage.prototype.logout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(LoginPage);
    };
    ReportsPage.prototype.getSalesSum = function () {
        var sum = 0.0;
        for (var _i = 0, _a = this.sales; _i < _a.length; _i++) {
            var x = _a[_i];
            sum += x.tutar;
        }
        return sum;
    };
    ReportsPage.prototype.getCollectingsSum = function () {
        var sum = 0.0;
        for (var _i = 0, _a = this.collectings; _i < _a.length; _i++) {
            var x = _a[_i];
            sum += x.tutar;
        }
        return sum;
    };
    ReportsPage.prototype.getSummarySum = function () {
        var sum = 0.0;
        for (var _i = 0, _a = this.summary; _i < _a.length; _i++) {
            var x = _a[_i];
            sum += x.tutar;
        }
        return sum;
    };
    ReportsPage.prototype.getProductsSum = function () {
        var sum = 0.0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var x = _a[_i];
            sum += x.tutar;
        }
        return sum;
    };
    ReportsPage.prototype.goBack = function () {
        this.navCtrl.push(FirmsPage);
    };
    ReportsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-report',
                    templateUrl: 'report.html'
                },] },
    ];
    /** @nocollapse */
    ReportsPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: FirmService, },
        { type: LoadingController, },
        { type: Auth, },
    ];
    return ReportsPage;
}());
