import { NgModule } from "@angular/core";

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { UserMasterComponent } from './user-master/user.component';
import { UserDetailComponent } from './user-detail/user.component';

@NgModule({
    declarations: [
        UserMasterComponent,
        UserDetailComponent
    ],
    imports: [  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule        
    ],
    exports: [
        UserMasterComponent,
        UserDetailComponent]
})
export class UserModule { }