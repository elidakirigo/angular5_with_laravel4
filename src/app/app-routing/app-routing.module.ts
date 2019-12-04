import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes , RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EditComponent } from '../edit/edit.component';
import { AddComponent } from '../login/add.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path : '' , redirectTo: '/home', pathMatch : 'full' },
  { path : 'home' , component : HomeComponent , canActivate : [AuthGuard]},
  { path : 'login' , component : AddComponent },
  { path : 'edit/:id' , component : EditComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

