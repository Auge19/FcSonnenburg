import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { pageRoutes } from '@pages/pages.routing';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: pageRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
