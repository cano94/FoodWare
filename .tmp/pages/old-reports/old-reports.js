import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the OldReports page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var OldReports = (function () {
    function OldReports(navCtrl) {
        this.navCtrl = navCtrl;
    }
    OldReports.prototype.ionViewDidLoad = function () {
        console.log('Hello OldReports Page');
    };
    OldReports.decorators = [
        { type: Component, args: [{
                    selector: 'page-old-reports',
                    templateUrl: 'old-reports.html'
                },] },
    ];
    /** @nocollapse */
    OldReports.ctorParameters = [
        { type: NavController, },
    ];
    return OldReports;
}());
