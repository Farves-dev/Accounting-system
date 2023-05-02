import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/shared/services/common.service';

export interface Transactions {
    position: number;
    holderName: string;
    paymentMode: string;
    date: string;
    creditAmount: number | string;
    debitAmount: number | string;
    incluExclu: string;
    taxRate: number;
    taxAmount: number;
    description: string;
    runningBalance: number;
}

const ELEMENT_DATA: Transactions[] = [
    {
        position: 1,
        holderName: 'Farves',
        paymentMode: 'Gpay',
        date: '25/04/2023',
        creditAmount: 2000,
        debitAmount: '-',
        incluExclu: 'Excluded',
        taxRate: 18,
        taxAmount: 305.04,
        description: 'This is for Event Organizing',
        runningBalance: 2000,
    },
    {
        position: 2,
        holderName: 'Safiyudeen',
        paymentMode: 'Credit Card',
        date: '25/04/2023',
        creditAmount: '-',
        debitAmount: 423.73,
        incluExclu: 'Included',
        taxRate: 18,
        taxAmount: 76.27,
        description: 'This is for Travel',
        runningBalance: 1500,
    },
    {
        position: 3,
        holderName: 'Hanif',
        paymentMode: 'Phone Pe',
        date: '25/04/2023',
        creditAmount: 1000,
        debitAmount: '-',
        incluExclu: 'Excluded',
        taxRate: 18,
        taxAmount: 152.54,
        description: 'This is for construction material',
        runningBalance: 2500,
    },
];

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
    constructor(private router: Router, private commonService: CommonService) {}

    displayedColumns: string[] = [
        'position',
        'holderName',
        'paymentMode',
        'date',
        'creditAmount',
        'debitAmount',
        'incluExclu',
        'taxRate',
        'taxAmount',
        'description',
        'runningBalance',
    ];
    dataSource = ELEMENT_DATA;

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    navigateToManageAccount() {
        this.router.navigateByUrl('/accounts/manage-accounts');
    }
}
