import { NgModule } from "@angular/core";

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { ExpenseTypeDetailComponent } from './expense-type-detail/expense-type.component';
import { ExpenseTypeMasterComponent } from './expense-type-master/expense-type.component';

@NgModule({
    declarations: [
        ExpenseTypeDetailComponent,        
        ExpenseTypeMasterComponent
    ],
    imports: [  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule        
    ],
    exports: [
        ExpenseTypeDetailComponent,        
        ExpenseTypeMasterComponent]
})
export class ExpenseTypeModule { }