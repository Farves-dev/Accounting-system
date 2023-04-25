import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseCategoriesComponent } from './components/expense-categories/expense-categories.component';

const routes: Routes = [
    { path: 'add-expense', component: AddExpenseComponent },
    { path: 'expense-categories', component: ExpenseCategoriesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExpenseRoutingModule {}
