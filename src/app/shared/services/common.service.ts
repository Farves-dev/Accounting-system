import { Injectable } from '@angular/core';
import { IncomeCategory } from '../modals/income-category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import CryptoJS, { AES } from 'crypto-js';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class CommonService {
    constructor(private http: HttpClient, private router: Router) {}
    env = environment;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    navigateToHome() {
        this.router.navigateByUrl('/dashboard');
    }

    encryptData(value: any) {
        return AES.encrypt(
            JSON.stringify(value),
            this.env.SECRET_KEY
        ).toString();
    }

    decryptData(value: any) {
        return JSON.parse(
            AES.decrypt(value.data, this.env.SECRET_KEY).toString(
                CryptoJS.enc.Utf8
            )
        );
    }

    addIncomeCategoryData(request: any) {
        console.log(request);

        return this.http.post(
            this.env.BASE_URL + '/add/category',
            { data: this.encryptData(request) },
            this.httpOptions
        );
    }

    getIncomeCategoryData(value: any) {
        return this.http.post(
            this.env.BASE_URL + '/search/category',
            { data: this.encryptData(value) },
            this.httpOptions
        );
    }

    deleteIncomeCategoryData(value: any) {
        return this.http.post(
            this.env.BASE_URL + '/delete/category',
            { data: this.encryptData(value) },
            this.httpOptions
        );
    }
}
