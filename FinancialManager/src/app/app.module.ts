import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routes';
import { CategoryComponent } from './Financial/category/category.component';
import { ExpenseTypeComponent } from './Financial/expense-type/expense-type.component';
import { LaunchComponent } from './Financial/launch/launch.component';
import { LaunchTypeComponent } from './Financial/launch-type/launch-type.component';
import { UserComponent } from './Financial/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ExpenseTypeComponent,
    LaunchComponent,
    LaunchTypeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
