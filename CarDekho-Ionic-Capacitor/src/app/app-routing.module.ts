/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'city-list',
    loadChildren: () => import('./pages/city-list/city-list.module').then(m => m.CityListPageModule)
  },
  {
    path: 'new-cars',
    loadChildren: () => import('./pages/new-cars/new-cars.module').then(m => m.NewCarsPageModule)
  },
  {
    path: 'used-cars',
    loadChildren: () => import('./pages/used-cars/used-cars.module').then(m => m.UsedCarsPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore/explore.module').then(m => m.ExplorePageModule)
  },
  {
    path: 'new-car-details',
    loadChildren: () => import('./pages/new-car-details/new-car-details.module').then(m => m.NewCarDetailsPageModule)
  },
  {
    path: 'used-car-details',
    loadChildren: () => import('./pages/used-car-details/used-car-details.module').then(m => m.UsedCarDetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'suggested',
    loadChildren: () => import('./pages/suggested/suggested.module').then(m => m.SuggestedPageModule)
  },
  {
    path: 'feel-car',
    loadChildren: () => import('./pages/feel-car/feel-car.module').then(m => m.FeelCarPageModule)
  },
  {
    path: 'offers-discount',
    loadChildren: () => import('./pages/offers-discount/offers-discount.module').then(m => m.OffersDiscountPageModule)
  },
  {
    path: 'brand-service-center',
    loadChildren: () => import('./pages/brand-service-center/brand-service-center.module').then(m => m.BrandServiceCenterPageModule)
  },
  {
    path: 'service-center-list',
    loadChildren: () => import('./pages/service-center-list/service-center-list.module').then(m => m.ServiceCenterListPageModule)
  },
  {
    path: 'brand-dealer',
    loadChildren: () => import('./pages/brand-dealer/brand-dealer.module').then(m => m.BrandDealerPageModule)
  },
  {
    path: 'dealer-list',
    loadChildren: () => import('./pages/dealer-list/dealer-list.module').then(m => m.DealerListPageModule)
  },
  {
    path: 'brand-modal-list',
    loadChildren: () => import('./pages/brand-modal-list/brand-modal-list.module').then(m => m.BrandModalListPageModule)
  },
  {
    path: 'spare-part-detail',
    loadChildren: () => import('./pages/spare-part-detail/spare-part-detail.module').then(m => m.SparePartDetailPageModule)
  },
  {
    path: 'service-cost-detail',
    loadChildren: () => import('./pages/service-cost-detail/service-cost-detail.module').then(m => m.ServiceCostDetailPageModule)
  },
  {
    path: 'used-car-dealers',
    loadChildren: () => import('./pages/used-car-dealers/used-car-dealers.module').then(m => m.UsedCarDealersPageModule)
  },
  {
    path: 'car-valuation',
    loadChildren: () => import('./pages/car-valuation/car-valuation.module').then(m => m.CarValuationPageModule)
  },
  {
    path: 'sell-car',
    loadChildren: () => import('./pages/sell-car/sell-car.module').then(m => m.SellCarPageModule)
  },
  {
    path: 'compare-car',
    loadChildren: () => import('./pages/compare-car/compare-car.module').then(m => m.CompareCarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
