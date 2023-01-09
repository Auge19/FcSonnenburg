import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { MembershipRoutingModule } from './membership.routing';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MembershipComponent],
  imports: [
    CommonModule,
    FormsModule,
    MembershipRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MembershipModule {}
