import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseCategoriesComponent } from './components/expense-categories/expense-categories.component';
import { ExpenseCategoriesDialogComponent } from './components/expense-categories-dialog/expense-categories-dialog.component';
import { MaterialExampleModule } from 'app/material.module';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { CollectDialogComponent } from './components/collect-dialog/collect-dialog.component';

@NgModule({
    declarations: [
        AddExpenseComponent,
        ExpenseCategoriesComponent,
        ExpenseCategoriesDialogComponent,
        DeleteDialogComponent,
        CollectDialogComponent,
    ],
    imports: [CommonModule, ExpenseRoutingModule, MaterialExampleModule],
})
export class ExpenseModule {}
