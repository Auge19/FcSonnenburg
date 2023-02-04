import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './primeng.module';
import { SliderComponent } from './components/slider/slider.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule, RouterModule],
  exports: [PrimeNgModule, SliderComponent]
})
export class SharedModule {}
