import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
export declare class Auth {
    http: Http;
    storage: Storage;
    token: any;
    trueResponse: string;
    logResponse: string;
    constructor(http: Http, storage: Storage);
    checkPreviousAuthorization(): boolean;
    login(credentials: any): Observable<any>;
    logout(): void;
}
