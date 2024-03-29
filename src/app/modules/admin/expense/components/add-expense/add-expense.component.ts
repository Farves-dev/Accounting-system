import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
//import { CollectDialogComponent } from '../collect-dialog/collect-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CollectDialogComponent } from '../collect-dialog/collect-dialog.component';

@Component({
    selector: 'app-add-expense',
    templateUrl: './add-expense.component.html',
    styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {
    categories = [
        { name: 'Salaries', id: '1' },
        { name: 'Utilities', id: '2' },
        { name: 'Rent', id: '3' },
    ];

    taxes = [
        { name: 'GST', id: '1' },
        { name: 'VAT', id: '2' },
    ];

    textInputDisabled = true;

    constructor(
        private commonService: CommonService,
        public dialog: MatDialog
    ) {}

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    toggleTaxInput() {
        this.textInputDisabled = !this.textInputDisabled;
    }

    ngOnInit(): void {}

    openCollectDialog() {
        const dialogRef = this.dialog.open(CollectDialogComponent, {
            width: '900px',
        });

        /* dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        }); */
    }
}
