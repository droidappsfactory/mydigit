import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './ui/shell/shell.component';
import { HeaderComponent } from './ui/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { HttpService } from './http/http.service';

@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule

  ],
  providers: [HttpService],
  exports: [ShellComponent]
})
export class CoreModule { }
