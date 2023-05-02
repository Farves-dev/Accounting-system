import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExpenseCategoriesDialogComponent } from '../expense-categories-dialog/expense-categories-dialog.component';
import { CommonService } from 'app/shared/services/common.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { IncomeCategoriesDialogComponent } from 'app/modules/admin/income/components/income-categories-dialog/income-categories-dialog.component';
import { ExpenseCategory } from 'app/shared/modals/expense-category';

export interface ExpenseCategories {
    position: number;
    categoryName: string;
    imgUrl: string;
}

const ELEMENT_DATA: ExpenseCategories[] = [
    {
        position: 1,
        categoryName: 'Salaries',
        imgUrl: 'assets/images/salary.png',
    },
    {
        position: 2,
        categoryName: 'Utilities',
        imgUrl: 'assets/images/utilities.png',
    },
    {
        position: 3,
        categoryName: 'Rent',
        imgUrl: 'assets/images/rent.png',
    },
];

@Component({
    selector: 'app-expense-categories',
    templateUrl: './expense-categories.component.html',
    styleUrls: ['./expense-categories.component.scss'],
})
export class ExpenseCategoriesComponent implements OnInit {
    constructor(
        public dialog: MatDialog,
        private router: Router,
        private commonService: CommonService
    ) {}

    displayedColumns: string[] = ['position', 'categoryName', 'actions'];
    dataSource = ELEMENT_DATA;

    expenseCategoryModal: ExpenseCategory = new ExpenseCategory();
    expenseResult: any;

    openDeleteDialog() {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    openAddDialog() {
        const dialogRef = this.dialog.open(IncomeCategoriesDialogComponent, {
            width: '400px',
            data: {
                name: this.expenseCategoryModal.categoryName,
                result: this.expenseResult,
            },
        });
    }

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    ngOnInit(): void {}
}
