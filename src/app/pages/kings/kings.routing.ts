import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KingsComponent } from './kings.component';

const routes: Routes = [{ path: '', component: KingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KingsRoutingModule {}
