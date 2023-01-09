import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const pageRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chronik',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule)
  },
  {
    path: 'gallerie',
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule)
  },
  {
    path: 'impressum',
    loadChildren: () =>
      import('./inprint/inprint.module').then((m) => m.InprintModule)
  },
  {
    path: 'kalender',
    loadChildren: () =>
      import('./calendar/calendar.module').then((m) => m.CalendarModule)
  },
  {
    path: 'koenige',
    loadChildren: () =>
      import('./kings/kings.module').then((m) => m.KingsModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule)
  },
  {
    path: 'datenschutz',
    loadChildren: () =>
      import('./privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      )
  },
  {
    path: 'vorstand',
    loadChildren: () =>
      import('./board/board.module').then((m) => m.BoardModule)
  },
  {
    path: 'mitglied',
    loadChildren: () =>
      import('./membership/membership.module').then((m) => m.MembershipModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
