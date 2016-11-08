import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
export declare class FirmService {
    http: Http;
    constructor(http: Http);
    getFirms(): Observable<any>;
    getReports(id: any): Observable<any>;
}
