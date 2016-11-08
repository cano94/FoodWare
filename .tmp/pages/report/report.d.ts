import { FirmService } from '../../providers/getFirms';
import { Auth } from '../../providers/auth';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
export declare class ReportsPage {
    navCtrl: NavController;
    private navParams;
    firmService: FirmService;
    loadingCtrl: LoadingController;
    authService: Auth;
    sales: any[];
    collectings: any[];
    summary: any[];
    products: any[];
    loading: any;
    firmId: string;
    firmName: string;
    constructor(navCtrl: NavController, navParams: NavParams, firmService: FirmService, loadingCtrl: LoadingController, authService: Auth);
    ionViewDidLoad(): void;
    getReports(): void;
    showLoader(): void;
    logout(): void;
    getSalesSum(): number;
    getCollectingsSum(): number;
    getSummarySum(): number;
    getProductsSum(): number;
    goBack(): void;
}
