/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Messanger Chat App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then(m => m.ChatsPageModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./pages/calls/calls.module').then(m => m.CallsPageModule)
  },
  {
    path: 'channels',
    loadChildren: () => import('./pages/channels/channels.module').then(m => m.ChannelsPageModule)
  },
  {
    path: 'feeds',
    loadChildren: () => import('./pages/feeds/feeds.module').then(m => m.FeedsPageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./pages/more/more.module').then(m => m.MorePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then(m => m.MessagePageModule)
  },
  {
    path: 'about-friend',
    loadChildren: () => import('./pages/about-friend/about-friend.module').then(m => m.AboutFriendPageModule)
  },
  {
    path: 'video-call',
    loadChildren: () => import('./pages/video-call/video-call.module').then(m => m.VideoCallPageModule)
  },
  {
    path: 'audio-call',
    loadChildren: () => import('./pages/audio-call/audio-call.module').then(m => m.AudioCallPageModule)
  },
  {
    path: 'find-channel',
    loadChildren: () => import('./pages/find-channel/find-channel.module').then(m => m.FindChannelPageModule)
  },
  {
    path: 'create-channel',
    loadChildren: () => import('./pages/create-channel/create-channel.module').then(m => m.CreateChannelPageModule)
  },
  {
    path: 'category-list',
    loadChildren: () => import('./pages/category-list/category-list.module').then(m => m.CategoryListPageModule)
  },
  {
    path: 'channel-info',
    loadChildren: () => import('./pages/channel-info/channel-info.module').then(m => m.ChannelInfoPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./pages/language/language.module').then(m => m.LanguagePageModule)
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
    path: 'app-pages',
    loadChildren: () => import('./pages/app-pages/app-pages.module').then(m => m.AppPagesPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./pages/slider/slider.module').then(m => m.SliderPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
