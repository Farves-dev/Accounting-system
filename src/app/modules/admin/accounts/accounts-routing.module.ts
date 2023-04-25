import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { ProfitAndLossComponent } from './components/profit-and-loss/profit-and-loss.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
    { path: 'new-account', component: NewAccountComponent },
    { path: 'manage-account', component: ManageAccountComponent },
    { path: 'profit-and-loss', component: ProfitAndLossComponent },
    { path: 'transactions', component: TransactionsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountsRoutingModule {}
