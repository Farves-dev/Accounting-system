import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsStatementComponent } from './components/accounts-statement/accounts-statement.component';
import { IncomeReportComponent } from './components/income-report/income-report.component';
import { ExpenseReportComponent } from './components/expense-report/expense-report.component';
import { TaxReportComponent } from './components/tax-report/tax-report.component';
import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';

const routes: Routes = [
    {
        path: 'accounts-statement',
        component: AccountsStatementComponent,
    },
    {
        path: 'income-report',
        component: IncomeReportComponent,
    },
    {
        path: 'expense-report',
        component: ExpenseReportComponent,
    },
    {
        path: 'tax-report',
        component: TaxReportComponent,
    },
    {
        path: 'account-transactions',
        component: AccountTransactionsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReportsRoutingModule {}
