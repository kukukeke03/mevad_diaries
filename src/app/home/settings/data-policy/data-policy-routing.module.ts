import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataPolicyPage } from './data-policy.page';

const routes: Routes = [
  {
    path: '',
    component: DataPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataPolicyPageRoutingModule {}
