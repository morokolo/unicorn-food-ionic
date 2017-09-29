import { Injectable } from '@angular/core';
@Injectable()
export class AppSettings {

    prod: string = '';
    preprod: string = '/preprod';
    staging: string = '/staging';
    environment: string;
    baseUrl: string;
    appVersion: string;

    constructor() {

        this.baseUrl = 'http://52.168.148.228:7071/';


    }



    public get CREATEPROFILE(): string {
        return this.baseUrl + 'api/createuserprofiles/';
    }

    public get GETRESTUARANTS(): string {
        return this.baseUrl + 'api/restaurants/';
    }
 
}
