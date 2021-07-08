import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent} from './modules/httppromises/components/home/home.component';
import { SuperappComponent} from './modules/httppromises/components/superapp/superapp.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SuperappComponent }
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
