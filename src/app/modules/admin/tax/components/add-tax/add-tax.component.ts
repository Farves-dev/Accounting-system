import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';

@Component({
    selector: 'app-add-tax',
    templateUrl: './add-tax.component.html',
    styleUrls: ['./add-tax.component.scss'],
})
export class AddTaxComponent implements OnInit {
    constructor(private commonService: CommonService) {}

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    taxType = [
        { name: 'Direct Tax', id: '1' },
        { name: 'Indirect Tax', id: '2' },
    ];

    // Default Today Date for datepicker
    date1 = new Date();
    currentYear = this.date1.getUTCFullYear();
    currentMonth = this.date1.getUTCMonth() + 1;
    currentDay = this.date1.getUTCDate();
    finalMonth: any;
    finalDay: any;
    todayDate: any;

    ngOnInit(): void {
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
}
