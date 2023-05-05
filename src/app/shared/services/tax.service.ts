import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { environment } from 'environments/environment';
import { GetTax } from '../modals/tax';

@Injectable({
    providedIn: 'root',
})
export class TaxService {
    constructor(
        private http: HttpClient,
        private router: Router,
        private _commonService: CommonService
    ) {}

    getTax(value: GetTax) {
        return this.http.post(
            environment.BASE_URL + '/search/tax',
            {
                data: this._commonService.encryptData(value),
            },
            this._commonService.httpOptions
        );
    }

    addTax(value: any) {
        return this.http.post(
            environment.BASE_URL + '/add/tax',
            {
                data: this._commonService.encryptData(value),
            },
            this._commonService.httpOptions
        );
    }
    updateTax(value: any) {
        return this.http.post(
            environment.BASE_URL + '/update/tax',
            {
                data: this._commonService.encryptData(value),
            },
            this._commonService.httpOptions
        );
    }

    deleteTax(value: any) {
        return this.http.post(
            environment.BASE_URL + '/delete/tax',
            { data: this._commonService.encryptData(value) },
            this._commonService.httpOptions
        );
    }
}
