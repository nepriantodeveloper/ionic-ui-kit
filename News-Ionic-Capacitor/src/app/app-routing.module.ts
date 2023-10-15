/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : News App Template
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
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },

  {
    path: 'channel',
    loadChildren: () => import('./pages/channel/channel.module').then(m => m.ChannelPageModule)
  },
  {
    path: 'select-account',
    loadChildren: () => import('./pages/select-account/select-account.module').then(m => m.SelectAccountPageModule)
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
    path: 'select-country',
    loadChildren: () => import('./pages/select-country/select-country.module').then(m => m.SelectCountryPageModule)
  },
  {
    path: 'select-topic',
    loadChildren: () => import('./pages/select-topic/select-topic.module').then(m => m.SelectTopicPageModule)
  },
  {
    path: 'select-sourses',
    loadChildren: () => import('./pages/select-sourses/select-sourses.module').then(m => m.SelectSoursesPageModule)
  },
  {
    path: 'featured-news',
    loadChildren: () => import('./pages/featured-news/featured-news.module').then(m => m.FeaturedNewsPageModule)
  },
  {
    path: 'hashtag',
    loadChildren: () => import('./pages/hashtag/hashtag.module').then(m => m.HashtagPageModule)
  },
  {
    path: 'news-detail',
    loadChildren: () => import('./pages/news-detail/news-detail.module').then(m => m.NewsDetailPageModule)
  },
  {
    path: 'followers',
    loadChildren: () => import('./pages/followers/followers.module').then(m => m.FollowersPageModule)
  },
  {
    path: 'following',
    loadChildren: () => import('./pages/following/following.module').then(m => m.FollowingPageModule)
  },
  {
    path: 'my-news',
    loadChildren: () => import('./pages/my-news/my-news.module').then(m => m.MyNewsPageModule)
  },
  {
    path: 'create-news',
    loadChildren: () => import('./pages/create-news/create-news.module').then(m => m.CreateNewsPageModule)
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
    path: 'bookmark',
    loadChildren: () => import('./pages/bookmark/bookmark.module').then(m => m.BookmarkPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
