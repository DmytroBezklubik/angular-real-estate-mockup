import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RheaderComponent } from './rheader/rheader.component';


@NgModule({
  declarations: [
    HeaderComponent,
    RheaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  exports:[
    HeaderComponent,
    RheaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
