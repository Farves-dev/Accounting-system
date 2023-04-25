import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
import { ShowDialogComponent } from '../show-dialog/show-dialog.component';
import { NewAccountComponent } from '../new-account/new-account.component';

@Component({
    selector: 'app-manage-account',
    templateUrl: './manage-account.component.html',
    styleUrls: ['./manage-account.component.scss'],
})
export class ManageAccountComponent implements OnInit {
    constructor(
        private commonService: CommonService,
        public dialog: MatDialog,
        private router: Router,
        private changeDetection: ChangeDetectorRef,
        public newAccount: NewAccountComponent
    ) {}

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    openDeleteDialog() {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    addAccount() {
        this.newAccount.isUpdate = false;
        this.router.navigateByUrl('/accounts/new-account');
    }

    openShowDialog() {
        const dialogRef = this.dialog.open(ShowDialogComponent, {
            width: '750px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    ngOnInit(): void {}

    public setUpdateMode() {
        this.newAccount.isUpdate = true;
        this.router.navigateByUrl('/accounts/new-account');
    }
}
