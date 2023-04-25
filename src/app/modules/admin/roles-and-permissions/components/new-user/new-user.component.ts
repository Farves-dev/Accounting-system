import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
    constructor(private commonService: CommonService) {}

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    roles = [
        { name: 'Super Admin', id: '1' },
        { name: 'Accountant', id: '2' },
        { name: 'Manager', id: '3' },
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
