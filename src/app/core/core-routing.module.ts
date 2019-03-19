import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './ui/shell/shell.component';
import { HomeComponent } from '../shared/pages/home/home.component';
import { LoginComponent } from '../shared/pages/login/login.component';
import { EducationComponent } from '../shared/pages/education/education.component';
import { ContactComponent } from '../shared/pages/contact/contact.component';
import { AngularComponent } from '../shared/pages/angular/angular.component';
import { NodeComponent } from '../shared/pages/node/node.component';
import { MongoComponent } from '../shared/pages/mongo/mongo.component';
import { AndroidComponent } from '../shared/pages/android/android.component';
import { ExperienceComponent } from '../shared/pages/experience/experience.component';
import { UtilitiesComponent } from '../shared/pages/utilities/utilities.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'education', component: EducationComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'angular', component: AngularComponent },
      { path: 'node', component: NodeComponent },
      { path: 'mongo', component: MongoComponent },
      { path: 'android', component: AndroidComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'utilities', component: UtilitiesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
