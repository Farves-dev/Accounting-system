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
    clubsListSlice = [
        { name: 'Salary', id: '1' },
        { name: 'part-time', id: '2' },
        { name: 'Travel', id: '3' },
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
