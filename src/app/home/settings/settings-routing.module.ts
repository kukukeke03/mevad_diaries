import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'service-term',
    loadChildren: () => import('./service-term/service-term.module').then( m => m.ServiceTermPageModule)
  },
  {
    path: 'data-policy',
    loadChildren: () => import('./data-policy/data-policy.module').then( m => m.DataPolicyPageModule)
  },
  {
    path: 'cookies-policy',
    loadChildren: () => import('./cookies-policy/cookies-policy.module').then( m => m.CookiesPolicyPageModule)
  },
  {
    path: 'community-standards',
    loadChildren: () => import('./community-standards/community-standards.module').then( m => m.CommunityStandardsPageModule)
  },
  {
    path: 'legal-policy',
    loadChildren: () => import('./legal-policy/legal-policy.module').then( m => m.LegalPolicyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
