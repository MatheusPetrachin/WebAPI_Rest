import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { LaunchMasterComponent } from './Financial/launch/launch-master/launch.component';
import { LaunchDetailComponent } from './Financial/launch/launch-detail/launch.component';
import { UserMasterComponent } from './Financial/user/user-master/user-master.component';
import { UserDetailComponent } from './Financial/user/user-detail/user-detail.component';


const APP_ROUTES: Routes = [
    { path:'', component: LaunchMasterComponent},
    { path:'launch-master', component: LaunchMasterComponent},
    { path:'launch-detail/:action/:id', component: LaunchDetailComponent},
    { path:'user-master', component: UserMasterComponent},
    { path:'user-detail/:action/:id', component: UserDetailComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);