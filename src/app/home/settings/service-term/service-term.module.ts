import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceTermPageRoutingModule } from './service-term-routing.module';

import { ServiceTermPage } from './service-term.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceTermPageRoutingModule
  ],
  declarations: [ServiceTermPage]
})
export class ServiceTermPageModule {}
