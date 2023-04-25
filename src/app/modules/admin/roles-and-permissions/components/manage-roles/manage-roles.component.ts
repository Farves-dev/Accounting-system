import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'app/shared/services/common.service';
import { DeleteRoleDialogComponent } from '../delete-role-dialog/delete-role-dialog.component';

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
