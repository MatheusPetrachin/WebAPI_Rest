import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LaunchComponent } from './Financial/launch/launch.component';
import { CategoryComponent } from './Financial/category/category.component';
import { ExpenseTypeComponent } from './Financial/expense-type/expense-type.component';
import { LaunchTypeComponent } from './Financial/launch-type/launch-type.component';
import { UserComponent } from './Financial/user/user.component';


const APP_ROUTES: Routes = [
    { path:'', component: LaunchComponent},
    { path:'launch', component: LaunchComponent},
    { path:'category', component: CategoryComponent},
    { path:'expenseType', component: ExpenseTypeComponent},
    { path:'launchType', component: LaunchTypeComponent},
    { path:'user', component: UserComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);