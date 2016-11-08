import { Component } from '@angular/core';
import { NavController, LoadingController,ToastController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import {FirmsPage} from '../firms/firms';
import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'login-page',
    templateUrl: 'login-page.html'
})
export class LoginPage {

    username: string;
    password: string;
    firm: string;
    response : boolean;
    loading: any;
    

    constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController,private toastCtrl: ToastController) {
        
    }

   /* ionViewDidLoad() {
        if(this.authService.checkPreviousAuthorization()){
             this.showLoader();
             this.navCtrl.setRoot(FirmsPage);
             this.loading.dismiss();
             }
    }*/
    
        login(){
       let credentials = [this.username, this.password, this.firm];
       this.authService.login(credentials)
       .subscribe(
           data => {
             this.response = data.login;
               if(this.response){
                   window.localStorage.setItem('username',credentials[0]);
                   window.localStorage.setItem('password',credentials[1]);
                   this.navCtrl.setRoot(FirmsPage);
               }else{
                   this.showToast();
               }
           },
           error => alert(error),
           () => console.log("Finished")
       );
    }
    
     showToast() {
    let toast = this.toastCtrl.create({
      message: 'Lütfen bilgilerinizi kontrol edin',
      duration: 3000,
      position: 'bottom'
    });

    toast.present(toast);
  }
    
     showLoader(){
 
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            dismissOnPageChange: true
        });
 
        this.loading.present();
 
    }

}