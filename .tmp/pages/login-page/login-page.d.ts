import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
export declare class LoginPage {
    navCtrl: NavController;
    authService: Auth;
    loadingCtrl: LoadingController;
    private toastCtrl;
    username: string;
    password: string;
    firm: string;
    response: boolean;
    loading: any;
    constructor(navCtrl: NavController, authService: Auth, loadingCtrl: LoadingController, toastCtrl: ToastController);
    login(): void;
    showToast(): void;
    showLoader(): void;
}
