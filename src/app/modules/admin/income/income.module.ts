import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { IncomeCategoriesComponent } from './components/income-categories/income-categories.component';
import { IncomeCategoriesDialogComponent } from './components/income-categories-dialog/income-categories-dialog.component';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialExampleModule } from 'app/material.module';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { DatePipe } from '@angular/common';
import { CollectDialogComponent } from './components/collect-dialog/collect-dialog.component';

@NgModule({
    declarations: [
        AddIncomeComponent,
        IncomeCategoriesComponent,
        IncomeCategoriesDialogComponent,
        DeleteDialogComponent,
        CollectDialogComponent,
    ],
    imports: [
        CommonModule,
        IncomeRoutingModule,
        SharedModule,
        MaterialExampleModule,
    ],
    providers: [DatePipe],
})
export class IncomeModule {}