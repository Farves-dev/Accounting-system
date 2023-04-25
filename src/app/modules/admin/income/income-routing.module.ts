import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { IncomeCategoriesComponent } from './components/income-categories/income-categories.component';

const routes: Routes = [
    {
        path: 'add-income',
        component: AddIncomeComponent,
    },
    {
        path: 'income-categories',
        component: IncomeCategoriesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IncomeRoutingModule {}
