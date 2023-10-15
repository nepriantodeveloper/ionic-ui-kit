/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Finance App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./pages/slider/slider.module').then(m => m.SliderPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'add-new-card',
    loadChildren: () => import('./pages/add-new-card/add-new-card.module').then(m => m.AddNewCardPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'operation',
    loadChildren: () => import('./pages/operation/operation.module').then(m => m.OperationPageModule)
  },

  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },

  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },

  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpPageModule)
  },

  {
    path: 'invite',
    loadChildren: () => import('./pages/invite/invite.module').then(m => m.InvitePageModule)
  },

  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },

  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },

  {
    path: 'security',
    loadChildren: () => import('./pages/security/security.module').then(m => m.SecurityPageModule)
  },

  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-passwordd',
    loadChildren: () => import('./pages/reset-passwordd/reset-passwordd.module').then(m => m.ResetPassworddPageModule)
  },

  {
    path: 'notification-setting',
    loadChildren: () => import('./pages/notification-setting/notification-setting.module').then(m => m.NotificationSettingPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsPageModule)
  },
  {
    path: 'transfer-money',
    loadChildren: () => import('./pages/transfer-money/transfer-money.module').then(m => m.TransferMoneyPageModule)
  },
  {
    path: 'topup-money',
    loadChildren: () => import('./pages/topup-money/topup-money.module').then(m => m.TopupMoneyPageModule)
  },
  {
    path: 'currency',
    loadChildren: () => import('./pages/currency/currency.module').then(m => m.CurrencyPageModule)
  },
  {
    path: 'exchange',
    loadChildren: () => import('./pages/exchange/exchange.module').then(m => m.ExchangePageModule)
  },
  {
    path: 'my-cards',
    loadChildren: () => import('./pages/my-cards/my-cards.module').then(m => m.MyCardsPageModule)
  },
  {
    path: 'transaction-details',
    loadChildren: () => import('./pages/transaction-details/transaction-details.module').then(m => m.TransactionDetailsPageModule)
  },
  {
    path: 'my-receipt',
    loadChildren: () => import('./pages/my-receipt/my-receipt.module').then(m => m.MyReceiptPageModule)
  },
  {
    path: 'my-qr',
    loadChildren: () => import('./pages/my-qr/my-qr.module').then(m => m.MyQrPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
