/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : MeTube App Template
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
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then(m => m.FilterPageModule)
  },

  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then(m => m.PolicyPageModule)
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
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'vip',
    loadChildren: () => import('./pages/vip/vip.module').then(m => m.VipPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'add-new-card',
    loadChildren: () => import('./pages/add-new-card/add-new-card.module').then(m => m.AddNewCardPageModule)
  },
  {
    path: 'payment-summary',
    loadChildren: () => import('./pages/payment-summary/payment-summary.module').then(m => m.PaymentSummaryPageModule)
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
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryPageModule)
  },

  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'video-detail',
    loadChildren: () => import('./pages/video-detail/video-detail.module').then(m => m.VideoDetailPageModule)
  },

  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerPageModule)
  },
  {
    path: 'channel',
    loadChildren: () => import('./pages/channel/channel.module').then(m => m.ChannelPageModule)
  },
  {
    path: 'shorts',
    loadChildren: () => import('./pages/shorts/shorts.module').then(m => m.ShortsPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then(m => m.CameraPageModule)
  },
  {
    path: 'sounds',
    loadChildren: () => import('./pages/sounds/sounds.module').then(m => m.SoundsPageModule)
  },
  {
    path: 'add-details',
    loadChildren: () => import('./pages/add-details/add-details.module').then(m => m.AddDetailsPageModule)
  },
  {
    path: 'set-visibility',
    loadChildren: () => import('./pages/set-visibility/set-visibility.module').then(m => m.SetVisibilityPageModule)
  },
  {
    path: 'set-audiance',
    loadChildren: () => import('./pages/set-audiance/set-audiance.module').then(m => m.SetAudiancePageModule)
  },
  {
    path: 'set-comment',
    loadChildren: () => import('./pages/set-comment/set-comment.module').then(m => m.SetCommentPageModule)
  },
  {
    path: 'your-videos',
    loadChildren: () => import('./pages/your-videos/your-videos.module').then(m => m.YourVideosPageModule)
  },
  {
    path: 'add-video-details',
    loadChildren: () => import('./pages/add-video-details/add-video-details.module').then(m => m.AddVideoDetailsPageModule)
  },
  {
    path: 'add-discription',
    loadChildren: () => import('./pages/add-discription/add-discription.module').then(m => m.AddDiscriptionPageModule)
  },
  {
    path: 'set-location',
    loadChildren: () => import('./pages/set-location/set-location.module').then(m => m.SetLocationPageModule)
  },
  {
    path: 'upload-video',
    loadChildren: () => import('./pages/upload-video/upload-video.module').then(m => m.UploadVideoPageModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./pages/subscribe/subscribe.module').then(m => m.SubscribePageModule)
  },
  {
    path: 'subscribe-list',
    loadChildren: () => import('./pages/subscribe-list/subscribe-list.module').then(m => m.SubscribeListPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryPageModule)
  },
  {
    path: 'history-video',
    loadChildren: () => import('./pages/history-video/history-video.module').then(m => m.HistoryVideoPageModule)
  },
  {
    path: 'download-video',
    loadChildren: () => import('./pages/download-video/download-video.module').then(m => m.DownloadVideoPageModule)
  },

  {
    path: 'watch-later',
    loadChildren: () => import('./pages/watch-later/watch-later.module').then(m => m.WatchLaterPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
