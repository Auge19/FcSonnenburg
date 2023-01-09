import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { themeReducer } from '@store/theme';
import { galleryReducer } from '@store/gallery/gallery.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GalleryEffects } from '@store/gallery/gallery.effects';
import { kingReducer } from '@store/king/king.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutModule,
    AppRoutingModule,
    EffectsModule.forRoot([GalleryEffects]),
    SharedModule,
    StoreModule.forRoot({
      gallery: galleryReducer,
      king: kingReducer,
      theme: themeReducer
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
