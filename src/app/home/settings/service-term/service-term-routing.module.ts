import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceTermPage } from './service-term.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceTermPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceTermPageRoutingModule {}
