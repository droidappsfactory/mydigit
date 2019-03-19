import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AngularComponent } from './pages/angular/angular.component';
import { NodeComponent } from './pages/node/node.component';
import { MongoComponent } from './pages/mongo/mongo.component';
import { AndroidComponent } from './pages/android/android.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { UtilitiesComponent } from './pages/utilities/utilities.component';

registerLocaleData(en);

@NgModule({
  declarations: [LoginComponent,
    SignupComponent,
    HomeComponent,
    EducationComponent,
    ContactComponent,
    FeedbackComponent,
    AngularComponent,
    NodeComponent,
    MongoComponent,
    AndroidComponent,
    ExperienceComponent,
    UtilitiesComponent],
  imports: [
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  exports: [LoginComponent, SignupComponent,
    HomeComponent,
    EducationComponent,
    ContactComponent,
    FeedbackComponent,
    AngularComponent,
    NodeComponent,
    MongoComponent,
    AndroidComponent,
    ExperienceComponent,
    UtilitiesComponent,
    NgZorroAntdModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class SharedModule { }
