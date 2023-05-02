import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MaterialExampleModule } from 'app/material.module';
import { NgApexchartsModule } from 'ng-apexcharts';

const dashboardRoutes: Route[] = [
    {
        path: '',
        component: DashboardComponent,
    },
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        RouterModule.forChild(dashboardRoutes),
        NgApexchartsModule,
        MaterialExampleModule,
    ],
})
export class DashboardModule {}
