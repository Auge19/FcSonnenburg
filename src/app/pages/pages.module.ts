import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsComponent } from './news/news.component';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent, NewsComponent],
  imports: [CommonModule, SharedModule],
  providers: [HomeService]
})
export class PagesModule {}
