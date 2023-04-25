import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageRolesComponent } from './components/manage-roles/manage-roles.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { AddRoleComponent } from './components/add-role/add-role.component';

const routes: Routes = [
    {
        path: 'manage-roles',
        component: ManageRolesComponent,
    },
    {
        path: 'manage-user',
        component: ManageUserComponent,
    },
    {
        path: 'new-user',
        component: NewUserComponent,
    },
    {
        path: 'add-role',
        component: AddRoleComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RolesAndPermissionsRoutingModule {}
