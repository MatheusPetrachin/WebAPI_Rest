import { NgModule } from "@angular/core";
import { CategoryComponent } from './category.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        CategoryComponent],
    imports: [  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule        
    ],
    exports: [CategoryComponent]
})
export class CategoryModule { }