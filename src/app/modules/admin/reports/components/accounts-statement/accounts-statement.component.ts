import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'app/shared/services/common.service';

export interface ManageExpense {
    position: number;
    holderName: string;
}

const ELEMENT_DATA: ManageExpense[] = [
    {
        position: 1,
        holderName: 'Farves',
    },
    {
        position: 2,
        holderName: 'Safiyudeen',
    },
    {
        position: 3,
        holderName: 'Hanif',
    },
];
@Component({
    selector: 'app-accounts-statement',
    templateUrl: './accounts-statement.component.html',
    styleUrls: ['./accounts-statement.component.scss'],
})
export class AccountsStatementComponent {
    textInputDisabled: boolean = true;
    showTrans: boolean = true;

    toggleTextInput() {
        this.textInputDisabled = !this.textInputDisabled;
    }

    constructor(
        private commonService: CommonService,
        public dialog: MatDialog,
        private router: Router,
        private changeDetection: ChangeDetectorRef // public newAccount: NewAccountComponent
    ) {}

    displayedColumns: string[] = ['position', 'holderName', 'transactions'];
    dataSource = ELEMENT_DATA;

    viewTransactions() {
        this.router.navigateByUrl('reports/account-transactions');
    }

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    // openDeleteDialog() {
    //     const dialogRef = this.dialog.open(DeleteDialogComponent, {
    //         width: '400px',
    //     });
    //     dialogRef.afterClosed().subscribe((result) => {
    //         console.log(`Dialog result: ${result}`);
    //     });
    // }

    // addAccount() {
    //     this.newAccount.isUpdate = false;
    //     this.router.navigateByUrl('/accounts/new-account');
    // }

    // openShowDialog() {
    //     const dialogRef = this.dialog.open(ShowDialogComponent, {
    //         width: '750px',
    //     });
    //     dialogRef.afterClosed().subscribe((result) => {
    //         console.log(`Dialog result: ${result}`);
    //     });
    // }

    // ngOnInit(): void {}

    // public setUpdateMode() {
    //     this.newAccount.isUpdate = true;
    //     this.router.navigateByUrl('/accounts/new-account');
    // }
}
