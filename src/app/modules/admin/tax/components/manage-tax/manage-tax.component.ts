import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewAccountComponent } from 'app/modules/admin/accounts/components/new-account/new-account.component';
import { CommonService } from 'app/shared/services/common.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export interface ManageTax {
    position: number;
    taxType: string;
    date: string;
    taxRate: number;
}

const ELEMENT_DATA: ManageTax[] = [
    {
        position: 1,
        taxType: 'GST',
        date: '14/04/2023',
        taxRate: 18,
    },
    {
        position: 2,
        taxType: 'VAT',
        date: '14/04/2023',
        taxRate: 5,
    },
    {
        position: 3,
        taxType: 'GST',
        date: '14/04/2023',
        taxRate: 18,
    },
];

@Component({
    selector: 'app-manage-tax',
    templateUrl: './manage-tax.component.html',
    styleUrls: ['./manage-tax.component.scss'],
})
export class ManageTaxComponent implements OnInit {
    constructor(
        private commonService: CommonService,
        public dialog: MatDialog,
        private router: Router,
        public newAccount: NewAccountComponent
    ) {}

    displayedColumns: string[] = [
        'position',
        'taxType',
        'date',
        'taxRate',
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

    addTax() {
        this.newAccount.isUpdate = false;
        this.router.navigateByUrl('/tax/add-tax');
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

    public setUpdateMode() {
        this.newAccount.isUpdate = true;
        this.router.navigateByUrl('/accounts/new-account');
    }
}
