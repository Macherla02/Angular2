import {Injectable} from '@angular/core';
import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IAgreement} from './agreement';

@Injectable()

export class AgreementService{
    private _agreementUrl = 'api/agreements/agreements.json';

    constructor(private _http:Http){

    }
    getAgreements(): Observable<IAgreement[]>{
        return this._http.get(this._agreementUrl)
            .map((response: Response)=> <IAgreement[]>response.json())
            .catch((this.handleError))
    }

    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error ||"Server Error");
    }
}