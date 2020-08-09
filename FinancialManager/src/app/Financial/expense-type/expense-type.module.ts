import { NgModule } from "@angular/core";

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { ExpenseTypeDetailComponent } from './expense-type-detail/expense-type.component';
import { ExpenseTypeMasterComponent } from './expense-type-master/expense-type.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        ExpenseTypeDetailComponent,        
        ExpenseTypeMasterComponent
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
        MatTableModule        
    ],
    exports: [
        ExpenseTypeDetailComponent,        
        ExpenseTypeMasterComponent]
})
export class ExpenseTypeModule { }