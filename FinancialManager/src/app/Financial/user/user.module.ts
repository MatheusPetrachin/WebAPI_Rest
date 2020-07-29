import { NgModule } from "@angular/core";

import { UserMasterComponent } from './user-master/user-master.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        UserMasterComponent,
        UserDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatCardModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatButtonModule,
        MatNativeDateModule,
        MatIconModule
    ],
    exports: [
        UserMasterComponent,
        UserDetailComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }