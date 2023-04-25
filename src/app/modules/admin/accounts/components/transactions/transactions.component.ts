import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/shared/services/common.service';

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
    constructor(private router: Router, private commonService: CommonService) {}

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    navigateToManageAccount() {
        this.router.navigateByUrl('/accounts/manage-accounts');
    }
}
