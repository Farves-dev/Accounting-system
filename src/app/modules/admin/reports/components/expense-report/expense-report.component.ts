import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/shared/services/common.service';
import { ExpenseReceiptDialogComponent } from '../expense-receipt-dialog/expense-receipt-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ExpensePaymentDialogComponent } from '../expense-payment-dialog/expense-payment-dialog.component';

@Component({
    selector: 'app-expense-report',
    templateUrl: './expense-report.component.html',
    styleUrls: ['./expense-report.component.scss'],
})
export class ExpenseReportComponent implements OnInit {
    constructor(
        private router: Router,
        private commonService: CommonService,
        public dialog: MatDialog
    ) {}

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    ngOnInit(): void {}

    openExReceiptDialog() {
        const dialogRef = this.dialog.open(ExpenseReceiptDialogComponent, {
            width: '900px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    openExPaymentDialog() {
        const dialogRef = this.dialog.open(ExpensePaymentDialogComponent, {
            width: '900px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
