import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'app/shared/services/common.service';
import { ReceiptDialogComponent } from '../receipt-dialog/receipt-dialog.component';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
    selector: 'app-income-report',
    templateUrl: './income-report.component.html',
    styleUrls: ['./income-report.component.scss'],
})
export class IncomeReportComponent implements OnInit {
    constructor(
        private router: Router,
        private commonService: CommonService,
        public dialog: MatDialog
    ) {}

    navigateToHome() {
        this.commonService.navigateToHome();
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
