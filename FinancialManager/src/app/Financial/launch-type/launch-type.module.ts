import { NgModule } from "@angular/core";

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { LaunchTypeMasterComponent } from './launch-type-master/launch-type.component';
import { LaunchTypeDetailComponent } from './launch-type-detail/launch-type.component';

@NgModule({
    declarations: [
        LaunchTypeMasterComponent,
        LaunchTypeDetailComponent
    ],
    imports: [  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule        
    ],
    exports: [
        LaunchTypeMasterComponent,
        LaunchTypeDetailComponent]
})
export class LaunchTypeModule { }