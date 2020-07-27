import { NgModule } from "@angular/core";
import { LaunchTypeComponent } from './launch-type.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        LaunchTypeComponent],
    imports: [  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule        
    ],
    exports: [LaunchTypeComponent]
})
export class LaunchTypeModule { }