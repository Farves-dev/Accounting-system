import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root',
})
export class IncomeService {
    constructor(
        private http: HttpClient,
        private router: Router,
        private _commonService: CommonService
    ) {}
    env = environment;
    header = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    // addIncomeCategoryData(request: any) {
    //     console.log(request);

    //     return this.http.post(
    //         this.env.BASE_URL + '/add/category',
    //         { data: this._commonService.encryptData(request) },
    //         this._commonService.httpOptions
    //     );
    // }

    // getIncomeCategoryData(value: any) {
    //     return this.http.post(
    //         this.env.BASE_URL + '/search/category',
    //         { data: this._commonService.encryptData(value) },
    //         this._commonService.httpOptions
    //     );
    // }

    // deleteIncomeCategoryData(value: any) {
    //     return this.http.post(
    //         this.env.BASE_URL + '/delete/category',
    //         { data: this._commonService.encryptData(value) },
    //         this._commonService.httpOptions
    //     );
    // }

    addCategoryImage(value: any) {
        return this.http.post(this.env.BASE_URL + '/images', value);
    }

    addCategory(value: any) {
        return this.http.post(
            this.env.BASE_URL + '/add/category',
            { data: this._commonService.encryptData(value) },
            this._commonService.httpOptions
        );
    }

    getCategory(value: any) {
        return this.http.post(
            this.env.BASE_URL + '/search/category',
            { data: this._commonService.encryptData(value) },
            this._commonService.httpOptions
        );
    }
}
