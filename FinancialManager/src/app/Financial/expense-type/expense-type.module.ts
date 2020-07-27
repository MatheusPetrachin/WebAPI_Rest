import { NgModule } from "@angular/core";
import { ExpenseTypeComponent } from './expense-type.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        ExpenseTypeComponent],
    imports: [  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule        
    ],
    exports: [ExpenseTypeComponent]
})
export class ExpenseTypeModule { }