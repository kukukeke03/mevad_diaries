import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

import { ResturantPage } from './resturant.page';

const routes: Routes = [
  {
    path: '',
    component: ResturantPage
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
export class ResturantPageRoutingModule {}
