import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'app/shared/services/common.service';
import { DeleteRoleDialogComponent } from '../delete-role-dialog/delete-role-dialog.component';

export interface ManageTax {
    position: number;
    roleName: string;
    noOfUsers: number;
    date: string;
}

const ELEMENT_DATA: ManageTax[] = [
    {
        position: 1,
        roleName: 'Super Admin',
        noOfUsers: 1,
        date: '14/04/2023',
    },
    {
        position: 2,
        roleName: 'Accountant',
        noOfUsers: 2,
        date: '14/04/2023',
    },
    {
        position: 3,
        roleName: 'Manager',
        noOfUsers: 1,
        date: '14/04/2023',
    },
];

@Component({
    selector: 'app-manage-roles',
    templateUrl: './manage-roles.component.html',
    styleUrls: ['./manage-roles.component.scss'],
})
export class ManageRolesComponent implements OnInit {
    constructor(
        private commonService: CommonService,
        public dialog: MatDialog,
        private router: Router
    ) {}

    displayedColumns: string[] = [
        'position',
        'roleName',
        'noOfUsers',
        'date',
        'actions',
    ];
    dataSource = ELEMENT_DATA;

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    goToAddRole() {
        this.router.navigateByUrl('/roles-and-permissions/add-role');
    }

    openDeleteDialog() {
        const dialogRef = this.dialog.open(DeleteRoleDialogComponent, {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    ngOnInit(): void {}
}
