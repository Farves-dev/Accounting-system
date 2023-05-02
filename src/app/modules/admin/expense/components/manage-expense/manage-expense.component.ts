import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'app/shared/services/common.service';
import { ReceiptDialogComponent } from '../receipt-dialog/receipt-dialog.component';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

export interface ManageExpense {
    position: number;
    imgUrl: string;
    categoryName: string;
    description: string;
    date: string;
    taxAmount: number;
    amount: number;
}

const ELEMENT_DATA: ManageExpense[] = [
    {
        position: 1,
        imgUrl: 'assets/images/salary.png',
        categoryName: 'Salaries',
        description: 'Salaries',
        date: '23/04/2023',
        taxAmount: 1000,
        amount: 10000,
    },
    {
        position: 2,
        imgUrl: 'assets/images/utilities.png',
        categoryName: 'Utilities',
        description: 'Utilities',
        date: '23/04/2023',
        taxAmount: 500,
        amount: 15000,
    },
    {
        position: 3,
        imgUrl: 'assets/images/rent.png',
        categoryName: 'Rent',
        description: 'Rent',
        date: '23/04/2023',
        taxAmount: 750,
        amount: 7000,
    },
];

@Component({
    selector: 'app-manage-expense',
    templateUrl: './manage-expense.component.html',
    styleUrls: ['./manage-expense.component.scss'],
})
export class ManageExpenseComponent implements OnInit {
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

    addExpense() {
        // this.newAccount.isUpdate = false;
        this.router.navigateByUrl('/expense/add-expense');
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
