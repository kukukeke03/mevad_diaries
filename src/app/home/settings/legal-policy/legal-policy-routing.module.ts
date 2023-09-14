import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalPolicyPage } from './legal-policy.page';

const routes: Routes = [
  {
    path: '',
    component: LegalPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalPolicyPageRoutingModule {}
