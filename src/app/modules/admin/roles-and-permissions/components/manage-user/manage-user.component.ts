import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/shared/services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

export interface ManageTax {
    position: number;
    userName: string;
    userEmail: string;
    userRole: string;
    date: string;
}

const ELEMENT_DATA: ManageTax[] = [
    {
        position: 1,
        userName: 'Farves',
        userEmail: 'farves@gmail.com',
        userRole: 'Manager',
        date: '14/04/2023',
    },
    {
        position: 2,
        userName: 'Safiyudeen',
        userEmail: 'safiyudeen@gmail.com',
        userRole: 'Accountant',
        date: '14/04/2023',
    },
    {
        position: 3,
        userName: 'Hanif',
        userEmail: 'hanif@gmail.com',
        userRole: 'Super Admin',
        date: '14/04/2023',
    },
];

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

    displayedColumns: string[] = [
        'position',
        'userName',
        'userEmail',
        'userRole',
        'date',
        'actions',
    ];
    dataSource = ELEMENT_DATA;

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
