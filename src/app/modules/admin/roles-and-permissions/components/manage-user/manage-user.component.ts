import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/shared/services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
    selector: 'app-manage-user',
    templateUrl: './manage-user.component.html',
    styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit {
    constructor(
        private commonService: CommonService,
        public dialog: MatDialog,
        private router: Router
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

    // openShowDialog() {
    //     const dialogRef = this.dialog.open(ShowDialogComponent, {
    //         width: '750px',
    //     });
    //     dialogRef.afterClosed().subscribe((result) => {
    //         console.log(`Dialog result: ${result}`);
    //     });
    // }

    ngOnInit(): void {}
}
