import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent {
    constructor(private commonService: CommonService) {}
    showDialog: boolean = true;
    option: any = 0;
    isUpdate: boolean = false;

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    accountType = [
        { type: 'Cash', id: '1' },
        { type: 'Savings Account', id: '2' },
        { type: 'Current Account', id: '3' },
    ];

    // ngOnInit(): void {
    //     this.container.option = 2;
    // }
    // ngAfterContentInit() {
    //     if (this.container.accountId != undefined) {
    //         this.option = 1;
    //     }
    // }
}
