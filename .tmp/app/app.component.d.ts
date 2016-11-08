import { Nav, Platform, AlertController } from 'ionic-angular';
export declare class MyApp {
    private alertCtrl;
    nav: Nav;
    rootPage: any;
    constructor(platform: Platform, alertCtrl: AlertController);
    checkPreviousAuthorization(): void;
}
