import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityStandardsPageRoutingModule } from './community-standards-routing.module';

import { CommunityStandardsPage } from './community-standards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityStandardsPageRoutingModule
  ],
  declarations: [CommunityStandardsPage]
})
export class CommunityStandardsPageModule {}
