import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Loading, LoadingController } from 'ionic-angular';

// observable
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/timeout';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpHelper {

    loading: Loading;
    loadingActive: boolean = false;
    apikey: string;
    timeOut: number = 30 * 1000;

    constructor(
        public http: Http,
        public storage: Storage,
        public loadingCtrl: LoadingController
    ) {
    }

    /**
     * Handles external GET requests
     * @param url
     * @param data
     * @param loadMessage
     * @returns {Observable}
     */
    get(url: string, data: Object, loadMessage: string) {
        return this.httpHelperRequester('GET', url, data, loadMessage);
    }

    /**
     * Handles external POST requests
     * @param url
     * @param data
     * @param loadMessage
     * @returns {Observable}
     */
    post(url: string, data: Object, loadMessage: string) {
        return this.httpHelperRequester('POST', url, data, loadMessage);
    }

    /**
     * Handles all PUT requests
     * @param url
     * @param data
     * @param loadMessage
     * @returns {Observable}
     */
    put(url: string, data: Object, loadMessage: string) {
        return this.httpHelperRequester('PUT', url, data, loadMessage);
    }

    /**
     * Handles all DELETE requests
     * @param url
     * @param loadMessage
     * @returns {Observable}
     */
    delete(url: string, loadMessage: string) {
        let data: Object = {};
        return this.httpHelperRequester('DELETE', url, data, loadMessage);
    }

    /**
     * Handles all http request within app
     * @param action
     * @param url
     * @param data
     * @param loadingMessage
     * @returns {Observable}
     */
    httpHelperRequester(action: string, url: string, data: Object, loadingMessage: string) {

        this.showLoading(loadingMessage);

        // tslint:disable-next-line
        let observable: Observable<any> = Observable
            .from(this.storage.get('apikey'))
            .flatMap(
                (key) => {

                    let headers: Headers;

                    headers = new Headers({
                        'Content-Type': 'application/json'
                    });
                    data['apikey'] = key;


                    // let params: URLSearchParams = this.objToSearchParams(data);

                    // tslint:disable-next-line
                    let response: Observable<any>;

                    if (action === 'GET') {

                        response = this.http.get(url, data);

                    } else if (action === 'POST') {

                        let options: RequestOptions = new RequestOptions({headers});
                        
                        response = this.http.post(url, data, options);
                        
                    } else if (action === 'PUT') {

                        let options: RequestOptions = new RequestOptions({headers});
                        response = this.http.put(url, data, options);

                    } else if (action === 'DELETE') {

                        response = this.http.delete(url, data);

                    } else {

                        response = Observable.of('Invalid Request');

                    }

                    return response;

                }
            )
            .map(
                (res: Response | string) => {
                    this.hideLoading(loadingMessage);
                    if (res['status'] === 204) {
                        return 'No Content';
                    } else if (res === 'Invalid Request') {
                        return res;
                    } else {
                        let body: Object = (res as Response).json();
                        return body['data'] || {};
                    }
                })
            .timeout(this.timeOut)
            .catch(
                (err) => {
                    this.hideLoading(loadingMessage);
                    return Observable.throw(err);
                });

        return observable;

    };

    showLoading(loadingMessage: string) {
        if (loadingMessage && loadingMessage !== '') {
            this.loadingActive = true;
            this.presentLoading(loadingMessage);
        }
    }

    hideLoading(loadingMessage: string) {
        if (loadingMessage && loadingMessage !== '' && this.loading) {
            if (this.loading) {
                this.dismiss();
            }
            this.loadingActive = false;
        }
    }

    /**
     * Sets search parameters for requests
     * @param obj
     * @returns {URLSearchParams}
     */
    objToSearchParams(obj: Object): URLSearchParams {
        let params: URLSearchParams = new URLSearchParams();
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                params.set(key, obj[key]);
            }
        }
        return params;
    }

    presentLoading(message: string) {
        this.loading = this.loadingCtrl.create({
            content: message
        });

        this.loading.present();
    }

    /**
     * Dismisses loading message
     */
    dismiss() {
        this.loading.dismiss().catch(() => {
            return true;
        });
    }

}
