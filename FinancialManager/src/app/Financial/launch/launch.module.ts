import { NgModule } from "@angular/core";

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { LaunchMasterComponent } from './launch-master/launch.component';
import { LaunchDetailComponent } from './launch-detail/launch.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        LaunchMasterComponent,
        LaunchDetailComponent
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
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatCheckboxModule,
        MatSelectModule
    ],
    exports: [
        LaunchMasterComponent,
        LaunchDetailComponent]
})
export class LaunchModule { }