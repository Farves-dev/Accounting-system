import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'app/shared/services/common.service';
import { ReceiptDialogComponent } from '../receipt-dialog/receipt-dialog.component';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

export interface ManageIncome {
    position: number;
    imgUrl: string;
    categoryName: string;
    description: string;
    date: string;
    taxAmount: number;
    amount: number;
}

const ELEMENT_DATA: ManageIncome[] = [
    {
        position: 1,
        imgUrl: 'assets/images/sales-revenue.png',
        categoryName: 'Sales Revenue',
        description: 'Sales Revenue',
        date: '23/04/2023',
        taxAmount: 1000,
        amount: 10000,
    },
    {
        position: 2,
        imgUrl: 'assets/images/interest-revenue.png',
        categoryName: 'Interest Revenue',
        description: 'Interest Revenue',
        date: '23/04/2023',
        taxAmount: 500,
        amount: 15000,
    },
    {
        position: 3,
        imgUrl: 'assets/images/commission-revenue.png',
        categoryName: 'Commission Revenue',
        description: 'Commission Revenue',
        date: '23/04/2023',
        taxAmount: 750,
        amount: 7000,
    },
];

@Component({
    selector: 'app-manage-income',
    templateUrl: './manage-income.component.html',
    styleUrls: ['./manage-income.component.scss'],
})
export class ManageIncomeComponent implements OnInit {
    constructor(
        private router: Router,
        private commonService: CommonService,
        public dialog: MatDialog
    ) {}

    displayedColumns: string[] = [
        'position',
        'categoryName',
        'description',
        'date',
        'taxAmount',
        'amount',
        'receipt',
        'details',
        'actions',
    ];
    dataSource = ELEMENT_DATA;

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    addIncome() {
        // this.newAccount.isUpdate = false;
        this.router.navigateByUrl('/income/add-income');
    }

    ngOnInit(): void {}

    openReceiptDialog() {
        const dialogRef = this.dialog.open(ReceiptDialogComponent, {
            width: '900px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    openPaymentDialog() {
        const dialogRef = this.dialog.open(PaymentDialogComponent, {
            width: '900px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
