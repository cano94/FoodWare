import { FirmService } from '../../providers/getFirms';
import { Auth } from '../../providers/auth';
import { NavController, AlertController, LoadingController, NavParams, ToastController } from 'ionic-angular';
export declare class FirmsPage {
    navCtrl: NavController;
    private navParams;
    firmService: FirmService;
    loadingCtrl: LoadingController;
    authService: Auth;
    private toastCtrl;
    alerCtrl: AlertController;
    langs: any;
    langForm: any;
    loading: any;
    username: string;
    firms: any;
    previous: any;
    msg: any;
    testRadioOpen: boolean;
    testRadioResult: any;
    constructor(navCtrl: NavController, navParams: NavParams, firmService: FirmService, loadingCtrl: LoadingController, authService: Auth, toastCtrl: ToastController, alerCtrl: AlertController);
    ionViewDidLoad(): void;
    getFirms(): void;
    getMsg(): void;
    presentLoading(): void;
    showToast(): void;
    logout(): void;
    doRadio(): void;
}
