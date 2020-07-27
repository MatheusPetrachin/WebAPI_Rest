import { NgModule } from "@angular/core";
import { UserComponent } from './user.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        UserComponent],
    imports: [  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule        
    ],
    exports: [UserComponent]
})
export class UserModule { }