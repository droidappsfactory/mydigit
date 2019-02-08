import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './ui/shell/shell.component';
import { HomeComponent } from '../shared/pages/home/home.component';
import { LoginComponent } from '../shared/pages/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: ShellComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
