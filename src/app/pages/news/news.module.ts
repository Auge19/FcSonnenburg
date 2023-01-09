import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news.routing';
import { NewsService } from './news.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, NewsRoutingModule],
  providers: [NewsService]
})
export class NewsModule {}
