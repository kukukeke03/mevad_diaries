import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouponsPage } from './coupons.page';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: CouponsPage
  },
  {
    path: 'details',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponsPageRoutingModule {}
