import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Providersr
import { AppSettings } from './app-settings';
import { HttpHelper } from './http-helper';

@Injectable()
export class AuthenticationService {

    constructor(
        public appSettings: AppSettings,
        public _httpHelper: HttpHelper
    ) { }

    create(data: Object): Observable<Object> {
        let url: string = this.appSettings.CREATEPROFILE;

        return this._httpHelper.post(url, data, 'Creating user...');
    }

    getRestuarants(data: Object): Observable<Object> {
        let url: string = this.appSettings.GETRESTUARANTS;

        let messages = {
            'restu': 'Getting restuarants...',
            'ordering': 'Making payment...'
        };

        return this._httpHelper.get(url, data, messages[data['page']]);
    }

}
