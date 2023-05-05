import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { CollectDialogComponent } from '../collect-dialog/collect-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-income',
    templateUrl: './add-income.component.html',
    styleUrls: ['./add-income.component.scss'],
})
export class AddIncomeComponent {
    categories = [
        { name: 'Sales Revenue', id: 1 },
        { name: 'Interest Revenue', id: 2 },
        { name: 'Commission Revenue', id: 3 },
    ];

    accounts = [
        { name: 'Farves', id: 1 },
        { name: 'Irsath', id: 2 },
        { name: 'Moosa', id: 3 },
    ];

    taxes = [
        { name: 'GST', id: 1 },
        { name: 'VAT', id: 2 },
    ];

    isDisabled: boolean = true;
    taxRate: any;

    textInputDisabled = true;

    constructor(
        private commonService: CommonService,
        public dialog: MatDialog
    ) {}

    toggleTaxInput() {
        this.textInputDisabled = !this.textInputDisabled;
    }

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    ngOnInit() {}

    openCollectDialog() {
        const dialogRef = this.dialog.open(CollectDialogComponent, {
            width: '900px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
