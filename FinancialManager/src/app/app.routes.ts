import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { ExpenseTypeMasterComponent } from './Financial/expense-type/expense-type-master/expense-type.component';
import { ExpenseTypeDetailComponent } from './Financial/expense-type/expense-type-detail/expense-type.component';
import { LaunchMasterComponent } from './Financial/launch/launch-master/launch.component';
import { LaunchDetailComponent } from './Financial/launch/launch-detail/launch.component';
import { LaunchTypeMasterComponent } from './Financial/launch-type/launch-type-master/launch-type.component';
import { LaunchTypeDetailComponent } from './Financial/launch-type/launch-type-detail/launch-type.component';
import { UserMasterComponent } from './Financial/user/user-master/user-master.component';
import { UserDetailComponent } from './Financial/user/user-detail/user-detail.component';


const APP_ROUTES: Routes = [
    { path:'', component: LaunchMasterComponent},
    { path:'launch-master', component: LaunchMasterComponent},
    { path:'launch-detail', component: LaunchDetailComponent},
    { path:'expenseType-master', component: ExpenseTypeMasterComponent},
    { path:'expenseType-detail/:action/:id', component: ExpenseTypeDetailComponent},
    { path:'launchType-master', component: LaunchTypeMasterComponent},
    { path:'launchType-detail/:action/:id', component: LaunchTypeDetailComponent},
    { path:'user-master', component: UserMasterComponent},
    { path:'user-detail/:action/:id', component: UserDetailComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);