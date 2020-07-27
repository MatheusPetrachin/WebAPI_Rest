import { NgModule } from "@angular/core";

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { LaunchMasterComponent } from './launch-master/launch.component';
import { LaunchDetailComponent } from './launch-detail/launch.component';

@NgModule({
    declarations: [
        LaunchMasterComponent,
        LaunchDetailComponent
    ],
    imports: [  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule        
    ],
    exports: [
        LaunchMasterComponent,
        LaunchDetailComponent]
})
export class LaunchModule { }