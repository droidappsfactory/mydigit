import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/ui/shell/shell.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { SignupComponent } from './shared/pages/signup/signup.component';
import { FeedbackComponent } from './shared/pages/feedback/feedback.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
