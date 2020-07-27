import { NgModule } from "@angular/core";

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { CategoryDetailComponent } from './category-detail/category.component';
import { CategoryMasterComponent } from './category-master/category.component';

@NgModule({
    declarations: [
        CategoryDetailComponent,
        CategoryMasterComponent
    ],
    imports: [  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule        
    ],
    exports: [
        CategoryDetailComponent,
        CategoryMasterComponent
    ]
})
export class CategoryModule { }