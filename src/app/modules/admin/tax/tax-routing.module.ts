import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaxComponent } from './components/add-tax/add-tax.component';
import { ManageTaxComponent } from './components/manage-tax/manage-tax.component';
import { TaxStatementComponent } from './components/tax-statement/tax-statement.component';

const routes: Routes = [
    {
        path: 'add-tax',
        component: AddTaxComponent,
    },
    {
        path: 'manage-tax',
        component: ManageTaxComponent,
    },
    {
        path: 'tax-statement',
        component: TaxStatementComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TaxRoutingModule {}
