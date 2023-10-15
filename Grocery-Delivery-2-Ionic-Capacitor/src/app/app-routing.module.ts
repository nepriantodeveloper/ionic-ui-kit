/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
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
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'fill-bio',
    loadChildren: () => import('./pages/fill-bio/fill-bio.module').then(m => m.FillBioPageModule)
  },
  {
    path: 'upload-image',
    loadChildren: () => import('./pages/upload-image/upload-image.module').then(m => m.UploadImagePageModule)
  },
  {
    path: 'set-location',
    loadChildren: () => import('./pages/set-location/set-location.module').then(m => m.SetLocationPageModule)
  },
  {
    path: 'account-success',
    loadChildren: () => import('./pages/account-success/account-success.module').then(m => m.AccountSuccessPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./pages/store/store.module').then(m => m.StorePageModule)
  },
  {
    path: 'grocery',
    loadChildren: () => import('./pages/grocery/grocery.module').then(m => m.GroceryPageModule)
  },
  {
    path: 'store-detail',
    loadChildren: () => import('./pages/store-detail/store-detail.module').then(m => m.StoreDetailPageModule)
  },
  {
    path: 'grocery-detail',
    loadChildren: () => import('./pages/grocery-detail/grocery-detail.module').then(m => m.GroceryDetailPageModule)
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./pages/testimonials/testimonials.module').then(m => m.TestimonialsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'order-complete',
    loadChildren: () => import('./pages/order-complete/order-complete.module').then(m => m.OrderCompletePageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./pages/address/address.module').then(m => m.AddressPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./pages/favorite/favorite.module').then(m => m.FavoritePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingPageModule)
  },
  {
    path: 'remove-favorite',
    loadChildren: () => import('./pages/remove-favorite/remove-favorite.module').then(m => m.RemoveFavoritePageModule)
  },
  {
    path: 'notify',
    loadChildren: () => import('./pages/notify/notify.module').then(m => m.NotifyPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module').then(m => m.AddCardPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./pages/security/security.module').then(m => m.SecurityPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./pages/others/others.module').then(m => m.OthersPageModule)
  },
  {
    path: 'promo',
    loadChildren: () => import('./pages/promo/promo.module').then(m => m.PromoPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then(m => m.MessagePageModule)
  },
  {
    path: 'call',
    loadChildren: () => import('./pages/call/call.module').then(m => m.CallPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./pages/review/review.module').then(m => m.ReviewPageModule)
  },
  {
    path: 'find',
    loadChildren: () => import('./pages/find/find.module').then(m => m.FindPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
