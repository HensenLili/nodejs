import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Test1Component} from './pages/test1/test1.component';
import {Test2Component} from './pages/test2/test2.component';
import {AutomaticScoringComponent} from './pages/automatic-scoring/automatic-scoring.component';

const routes: Routes = [
  { path: '', redirectTo: 'test1', pathMatch: 'full'},
  { path: 'test1', component: Test1Component},
  { path: 'test2', component: Test2Component},
  { path: 'automatic-scoring', component: AutomaticScoringComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
