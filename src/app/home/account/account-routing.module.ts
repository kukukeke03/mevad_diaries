import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountBalanceDetailComponent } from './account-balance-detail/account-balance-detail.component';

import { AccountPage } from './account.page';
import { DonarDetailComponent } from './donar-detail/donar-detail.component';
import { ExpenseSheetComponent } from './expense-sheet/expense-sheet.component';
import { ValueableSponserComponent } from './valueable-sponser/valueable-sponser.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPage
  },
  {
    path: 'account-balance',
    component: AccountBalanceDetailComponent
  },
  {
    path: 'donor-detail',
    component: DonarDetailComponent
  },
  {
    path: 'expense-sheet',
    component: ExpenseSheetComponent
  },
  {
    path: 'sponsers',
    component: ValueableSponserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
