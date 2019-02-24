import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './ui/shell/shell.component';
import { HomeComponent } from '../shared/pages/home/home.component';
import { LoginComponent } from '../shared/pages/login/login.component';
import { EducationComponent } from '../shared/pages/education/education.component';
import { ContactComponent } from '../shared/pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'education', component: EducationComponent },
      { path: 'contact', component: ContactComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
