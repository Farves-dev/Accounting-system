import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { CollectDialogComponent } from '../collect-dialog/collect-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-add-income',
    templateUrl: './add-income.component.html',
    styleUrls: ['./add-income.component.scss'],
})
export class AddIncomeComponent {
    clubsListSlice = [
        { name: 'Salary', id: '1' },
        { name: 'part-time', id: '2' },
        { name: 'Travel', id: '3' },
    ];
    accounts = [
        { name: 'Farves', id: '1' },
        { name: 'Irsath', id: '2' },
        { name: 'Moosa', id: '3' },
    ];

    // Default Today Date for datepicker
    date1 = new Date();
    currentYear = this.date1.getUTCFullYear();
    currentMonth = this.date1.getUTCMonth() + 1;
    currentDay = this.date1.getUTCDate();
    finalMonth: any;
    finalDay: any;
    todayDate: any;

    isDisabled: boolean = true;
    taxRate: any;

    textInputDisabled = true;

    constructor(
        private commonService: CommonService,
        public dialog: MatDialog
    ) {}

    toggleTaxInput() {
        this.textInputDisabled = !this.textInputDisabled;
    }

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    ngOnInit() {
        if (this.currentDay < 10) {
            this.finalDay = '0' + this.currentDay;
        } else {
            this.finalDay = this.currentDay;
        }

        if (this.currentMonth < 10) {
            this.finalMonth = '0' + this.currentMonth;
        } else {
            this.finalMonth = this.currentMonth;
        }

        this.todayDate =
            this.finalDay + '-' + this.finalMonth + '-' + this.currentYear;
    }

    openCollectDialog() {
        const dialogRef = this.dialog.open(CollectDialogComponent, {
            width: '900px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
