import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [LoginComponent, SignupComponent, HomeComponent],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  exports: [LoginComponent, SignupComponent, HomeComponent, NgZorroAntdModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class SharedModule { }
