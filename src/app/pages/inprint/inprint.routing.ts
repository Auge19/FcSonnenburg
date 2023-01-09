import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InprintComponent } from './inprint.component';

const routes: Routes = [{ path: '', component: InprintComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InprintRoutingModule {}
