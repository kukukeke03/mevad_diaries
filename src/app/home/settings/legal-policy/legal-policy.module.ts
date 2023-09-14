import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalPolicyPageRoutingModule } from './legal-policy-routing.module';

import { LegalPolicyPage } from './legal-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalPolicyPageRoutingModule
  ],
  declarations: [LegalPolicyPage]
})
export class LegalPolicyPageModule {}
