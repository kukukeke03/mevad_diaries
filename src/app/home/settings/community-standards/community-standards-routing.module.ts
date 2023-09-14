import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityStandardsPage } from './community-standards.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityStandardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityStandardsPageRoutingModule {}
