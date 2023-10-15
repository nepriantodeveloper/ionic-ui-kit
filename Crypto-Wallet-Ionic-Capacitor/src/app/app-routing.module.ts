/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CryptoWallet App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletPageModule)
  },
  {
    path: 'swap',
    loadChildren: () => import('./pages/swap/swap.module').then(m => m.SwapPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'import-seed',
    loadChildren: () => import('./pages/import-seed/import-seed.module').then(m => m.ImportSeedPageModule)
  },
  {
    path: 'new-wallet',
    loadChildren: () => import('./pages/new-wallet/new-wallet.module').then(m => m.NewWalletPageModule)
  },
  {
    path: 'import-account',
    loadChildren: () => import('./pages/import-account/import-account.module').then(m => m.ImportAccountPageModule)
  },
  {
    path: 'new-account',
    loadChildren: () => import('./pages/new-account/new-account.module').then(m => m.NewAccountPageModule)
  },
  {
    path: 'import-account-model',
    loadChildren: () => import('./pages/import-account-model/import-account-model.module').then(m => m.ImportAccountModelPageModule)
  },
  {
    path: 'purchase-method',
    loadChildren: () => import('./pages/purchase-method/purchase-method.module').then(m => m.PurchaseMethodPageModule)
  },
  {
    path: 'import-tokens',
    loadChildren: () => import('./pages/import-tokens/import-tokens.module').then(m => m.ImportTokensPageModule)
  },
  {
    path: 'bnb',
    loadChildren: () => import('./pages/bnb/bnb.module').then(m => m.BnbPageModule)
  },
  {
    path: 'receive-bnb',
    loadChildren: () => import('./pages/receive-bnb/receive-bnb.module').then(m => m.ReceiveBnbPageModule)
  },
  {
    path: 'send-bnb',
    loadChildren: () => import('./pages/send-bnb/send-bnb.module').then(m => m.SendBnbPageModule)
  },
  {
    path: 'send-to',
    loadChildren: () => import('./pages/send-to/send-to.module').then(m => m.SendToPageModule)
  },
  {
    path: 'amount',
    loadChildren: () => import('./pages/amount/amount.module').then(m => m.AmountPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/confirmation/confirmation.module').then(m => m.ConfirmationPageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then(m => m.PreferencesPageModule)
  },
  {
    path: 'general',
    loadChildren: () => import('./pages/general/general.module').then(m => m.GeneralPageModule)
  },
  {
    path: 'security-privacy',
    loadChildren: () => import('./pages/security-privacy/security-privacy.module').then(m => m.SecurityPrivacyPageModule)
  },
  {
    path: 'advanced',
    loadChildren: () => import('./pages/advanced/advanced.module').then(m => m.AdvancedPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'networks',
    loadChildren: () => import('./pages/networks/networks.module').then(m => m.NetworksPageModule)
  },
  {
    path: 'metacoin',
    loadChildren: () => import('./pages/metacoin/metacoin.module').then(m => m.MetacoinPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
