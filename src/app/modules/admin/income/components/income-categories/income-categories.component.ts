import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef,
    Input,
    ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { IncomeCategoriesDialogComponent } from '../income-categories-dialog/income-categories-dialog.component';
import { CommonService } from 'app/shared/services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import {
    IncomeCategory,
    getIncomeCategory,
} from 'app/shared/modals/income-category';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

import { DatePipe } from '@angular/common';

export interface IncomeCategories {
    position: number;
    categoryName: string;
    imgUrl: string;
}

const ELEMENT_DATA: IncomeCategories[] = [
    {
        position: 1,
        categoryName: 'Sales Revenue',
        imgUrl: 'assets/images/sales-revenue.png',
    },
    {
        position: 2,
        categoryName: 'Interest Revenue',
        imgUrl: 'assets/images/interest-revenue.png',
    },
    {
        position: 3,
        categoryName: 'Commission Revenue',
        imgUrl: 'assets/images/commission-revenue.png',
    },
];

@Component({
    selector: 'app-income-categories',
    templateUrl: './income-categories.component.html',
    styleUrls: ['./income-categories.component.scss'],
})
export class IncomeCategoriesComponent {
    @ViewChild(IncomeCategoriesDialogComponent)
    IncomeCategoriesDialogComponent: IncomeCategoriesDialogComponent;

    constructor(
        private router: Router,
        private commonService: CommonService,
        public dialog: MatDialog,
        private changeDetection: ChangeDetectorRef,
        private datePipe: DatePipe
    ) {}

    displayedColumns: string[] = ['position', 'categoryName', 'actions'];
    dataSource = ELEMENT_DATA;

    data: getIncomeCategory = new getIncomeCategory();
    showAddDialog: boolean = false;
    showDeleteDialog: boolean = false;
    incomeCategory: any;
    incomeCategoryModal: IncomeCategory = new IncomeCategory();
    incomeResult: any;

    startDate: Date;
    endDate: Date;
    datePicker: any;

    openAddDialog() {
        const dialogRef = this.dialog.open(IncomeCategoriesDialogComponent, {
            width: '400px',
            data: {
                name: this.incomeCategoryModal.categoryName,
                result: this.incomeResult,
            },
        });
    }
    // dialogRef.afterClosed().subscribe((result) => {
    //     console.log(`Dialog result: ${result}`);
    //     this.incomeCategoryModal.categoryName = result;
    //     console.log(this.incomeCategoryModal);
    // });

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

    // categoryId: number;
    // deleteCategory(content: any, id: any) {
    //     this.categoryId = id;
    //     const dialogRef = this.dialog.open(content);
    //     this.IncomeCategoriesDialogComponent.togglePopup = 'deleteCategory';
    // }
    // confirm() {}

    ngAfterViewInit() {}

    ngOnInit() {
        this.getIncomeCategory();
        // const today = new Date();
        // const firstDayOfMonth = new Date(
        //     today.getFullYear(),
        //     today.getMonth(),
        //     1
        // );
        // const lastDayOfMonth = new Date(
        //     today.getFullYear(),
        //     today.getMonth() + 1,
        //     0
        // );
        // this.startDate = firstDayOfMonth;
        // this.endDate = lastDayOfMonth;
    }

    onSuccessAdd(event) {
        if (event == 'added') {
            this.showAddDialog = false;
            this.getIncomeCategory();
        } else if (event == 'closed') {
            this.showAddDialog = false;
        }
    }

    getIncomeCategory() {
        this.commonService.getIncomeCategoryData(this.data).subscribe(
            (data) => {
                this.incomeCategory = this.commonService.decryptData(data);
                console.log(this.commonService.decryptData(data));
                this.changeDetection.detectChanges();
            },
            (e: HttpErrorResponse) => {
                console.log(e);
            }
        );
    }

    deleteIncomeCategory(id: number) {
        let req = {
            userId: this.incomeCategoryModal.userId,
            id: id,
        };
        this.showDeleteDialog = true;
        this.commonService.deleteIncomeCategoryData(req).subscribe((res) => {});
    }
}
