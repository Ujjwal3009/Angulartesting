import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrudentsComponent } from './strudents/strudents.component';

const routes: Routes = [
  {
    path: "student", component: StrudentsComponent
  },
  {path : "", redirectTo:"student",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
