import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import {FirmsPage} from '../pages/firms/firms';
import {LoginPage} from '../pages/login-page/login-page';
import {ReportsPage} from '../pages/report/report';
 
@Injectable()
export class Auth {
 
  public token: any;
  
  public trueResponse = JSON.stringify({ "login": true });

   public logResponse = "";
 
  constructor(public http: Http, public storage: Storage) {
 
  }
 
 checkPreviousAuthorization(): boolean { 
    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) && 
       (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
        return false;    
    }else{
        return true;
    }
  } 
 
  login(credentials){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization','Basic OTA1MzAwNjY3MDg2OjZ4dDg5dk50VXdCbg==');
        headers.append('Accept', 'application/json;charset=UTF-8');
    
        let url = 'http://foodware.ilogic.com.tr/login.aspx?'+'user='+credentials[0]+'&pass='+credentials[1]+'&firm='+credentials[2];

      return this.http.get(url,{headers: headers})
      .map(res => res.json());
   }
            
  logout(){
    window.localStorage.removeItem('username');
  	window.localStorage.removeItem('password');
    window.localStorage.clear();
  }
 
}