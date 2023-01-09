import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './primeng.module';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule],
  exports: [PrimeNgModule, SliderComponent]
})
export class SharedModule {}
