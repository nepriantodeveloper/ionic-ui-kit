/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Event Booking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
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
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'my-event',
    loadChildren: () => import('./pages/my-event/my-event.module').then(m => m.MyEventPageModule)
  },
  {
    path: 'event-around',
    loadChildren: () => import('./pages/event-around/event-around.module').then(m => m.EventAroundPageModule)
  },
  {
    path: 'my-calendar',
    loadChildren: () => import('./pages/my-calendar/my-calendar.module').then(m => m.MyCalendarPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'choose-interest',
    loadChildren: () => import('./pages/choose-interest/choose-interest.module').then(m => m.ChooseInterestPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then(m => m.LocationPageModule)
  },
  {
    path: 'login-congrats',
    loadChildren: () => import('./pages/login-congrats/login-congrats.module').then(m => m.LoginCongratsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./pages/bookmark/bookmark.module').then(m => m.BookmarkPageModule)
  },
  {
    path: 'bookmark-model',
    loadChildren: () => import('./pages/bookmark-model/bookmark-model.module').then(m => m.BookmarkModelPageModule)
  },
  {
    path: 'featured',
    loadChildren: () => import('./pages/featured/featured.module').then(m => m.FeaturedPageModule)
  },
  {
    path: 'trending',
    loadChildren: () => import('./pages/trending/trending.module').then(m => m.TrendingPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'concept-detail',
    loadChildren: () => import('./pages/concept-detail/concept-detail.module').then(m => m.ConceptDetailPageModule)
  },
  {
    path: 'event-joining',
    loadChildren: () => import('./pages/event-joining/event-joining.module').then(m => m.EventJoiningPageModule)
  },
  {
    path: 'discussion',
    loadChildren: () => import('./pages/discussion/discussion.module').then(m => m.DiscussionPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./pages/ticket/ticket.module').then(m => m.TicketPageModule)
  },
  {
    path: 'organizer',
    loadChildren: () => import('./pages/organizer/organizer.module').then(m => m.OrganizerPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'new-card',
    loadChildren: () => import('./pages/new-card/new-card.module').then(m => m.NewCardPageModule)
  },
  {
    path: 'payment-ticket',
    loadChildren: () => import('./pages/payment-ticket/payment-ticket.module').then(m => m.PaymentTicketPageModule)
  },
  {
    path: 'documentation',
    loadChildren: () => import('./pages/documentation/documentation.module').then(m => m.DocumentationPageModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./pages/photos/photos.module').then(m => m.PhotosPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then(m => m.VideosPageModule)
  },
  {
    path: 'add-documentation',
    loadChildren: () => import('./pages/add-documentation/add-documentation.module').then(m => m.AddDocumentationPageModule)
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
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./pages/security/security.module').then(m => m.SecurityPageModule)
  },
  {
    path: 'appearance',
    loadChildren: () => import('./pages/appearance/appearance.module').then(m => m.AppearancePageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpPageModule)
  },
  {
    path: 'invite-friends',
    loadChildren: () => import('./pages/invite-friends/invite-friends.module').then(m => m.InviteFriendsPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then(m => m.LogoutPageModule)
  },
  {
    path: 'terms-condition',
    loadChildren: () => import('./pages/terms-condition/terms-condition.module').then(m => m.TermsConditionPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
