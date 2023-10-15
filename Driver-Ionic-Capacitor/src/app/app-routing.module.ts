/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Driver App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/slider/slider.module').then(m => m.SliderPageModule)
  },
  {
    path: 'folder',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then(m => m.LocationPageModule)
  },
  {
    path: 'accept',
    loadChildren: () => import('./pages/accept/accept.module').then(m => m.AcceptPageModule)
  },
  {
    path: 'pickup',
    loadChildren: () => import('./pages/pickup/pickup.module').then(m => m.PickupPageModule)
  },
  {
    path: 'pickup-detail',
    loadChildren: () => import('./pages/pickup-detail/pickup-detail.module').then(m => m.PickupDetailPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'invite',
    loadChildren: () => import('./pages/invite/invite.module').then(m => m.InvitePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'friend-list',
    loadChildren: () => import('./pages/friend-list/friend-list.module').then(m => m.FriendListPageModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./pages/management/management.module').then(m => m.ManagementPageModule)
  },
  {
    path: 'add-vehicle',
    loadChildren: () => import('./pages/add-vehicle/add-vehicle.module').then(m => m.AddVehiclePageModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./pages/document/document.module').then(m => m.DocumentPageModule)
  },
  {
    path: 'vihicle',
    loadChildren: () => import('./pages/vihicle/vihicle.module').then(m => m.VihiclePageModule)
  },
  {
    path: 'card-info',
    loadChildren: () => import('./pages/card-info/card-info.module').then(m => m.CardInfoPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then(m => m.MessagePageModule)
  },
  {
    path: 'cancel',
    loadChildren: () => import('./pages/cancel/cancel.module').then(m => m.CancelPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
