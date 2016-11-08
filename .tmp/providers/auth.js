import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
export var Auth = (function () {
    function Auth(http, storage) {
        this.http = http;
        this.storage = storage;
        this.trueResponse = JSON.stringify({ "login": true });
        this.logResponse = "";
    }
    Auth.prototype.checkPreviousAuthorization = function () {
        if ((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
            (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
            return false;
        }
        else {
            return true;
        }
    };
    Auth.prototype.login = function (credentials) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic OTA1MzAwNjY3MDg2OjZ4dDg5dk50VXdCbg==');
        headers.append('Accept', 'application/json;charset=UTF-8');
        var url = 'http://foodware.ilogic.com.tr/login.aspx?' + 'user=' + credentials[0] + '&pass=' + credentials[1] + '&firm=' + credentials[2];
        return this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    Auth.prototype.logout = function () {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('password');
        window.localStorage.clear();
    };
    Auth.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Auth.ctorParameters = [
        { type: Http, },
        { type: Storage, },
    ];
    return Auth;
}());
