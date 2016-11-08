import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
export var FirmService = (function () {
    function FirmService(http) {
        this.http = http;
    }
    FirmService.prototype.getFirms = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic OTA1MzAwNjY3MDg2OjZ4dDg5dk50VXdCbg==');
        headers.append('Accept', 'application/json;charset=UTF-8');
        var url = 'http://foodware.ilogic.com.tr/subeler.aspx?user=aykut&pass=ince&firm=MERTKEBAP';
        return this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FirmService.prototype.getReports = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic OTA1MzAwNjY3MDg2OjZ4dDg5dk50VXdCbg==');
        headers.append('Accept', 'application/json;charset=UTF-8');
        var url = 'http://foodware.ilogic.com.tr/rapor.aspx?user=aykut&pass=ince&firm=MERTKEBAP&sube=' + id;
        return this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FirmService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FirmService.ctorParameters = [
        { type: Http, },
    ];
    return FirmService;
}());
