import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'app/shared/services/common.service';

@Component({
    selector: 'app-account-transactions',
    templateUrl: './account-transactions.component.html',
    styleUrls: ['./account-transactions.component.scss'],
})
export class AccountTransactionsComponent implements OnInit {
    constructor(
        private commonService: CommonService,
        public dialog: MatDialog,
        private router: Router,
        private changeDetection: ChangeDetectorRef // public newAccount: NewAccountComponent
    ) {}
    ngOnInit(): void {}

    goToAccStatement() {
        this.router.navigateByUrl('reports/accounts-statement');
    }

    navigateToHome() {
        this.commonService.navigateToHome();
    }
}
