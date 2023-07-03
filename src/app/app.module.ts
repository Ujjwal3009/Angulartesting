import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrudentsComponent } from './strudents/strudents.component';
import { HttpClientModule } from '@angular/common/http';
import { FileSizePipe } from './pipes/file-size.pipe';
import { UserDetailFormComponent } from './forms/user-detail-form/user-detail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StrudentsComponent,
    FileSizePipe,
    UserDetailFormComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
