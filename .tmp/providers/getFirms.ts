import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
 
@Injectable()
export class FirmService {
 
 
 
  constructor(public http: Http) {

}

getFirms(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization','Basic OTA1MzAwNjY3MDg2OjZ4dDg5dk50VXdCbg==');
        headers.append('Accept', 'application/json;charset=UTF-8');
    
        let url = 'http://foodware.ilogic.com.tr/subeler.aspx?user=aykut&pass=ince&firm=MERTKEBAP'
      return this.http.get(url,{headers: headers})
      .map(res => res.json());
   }

   getReports(id){
     let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization','Basic OTA1MzAwNjY3MDg2OjZ4dDg5dk50VXdCbg==');
        headers.append('Accept', 'application/json;charset=UTF-8');
        
        let url = 'http://foodware.ilogic.com.tr/rapor.aspx?user=aykut&pass=ince&firm=MERTKEBAP&sube='+id
        
        return this.http.get(url,{headers: headers})
      .map(res => res.json());

   }



}