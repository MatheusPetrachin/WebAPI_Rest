import { NgModule } from "@angular/core";
import { LaunchComponent } from './launch.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        LaunchComponent],
    imports: [  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule        
    ],
    exports: [LaunchComponent]
})
export class LaunchModule { }