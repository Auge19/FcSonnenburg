import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { ThemeService } from '@app/services/theme.service';

@Component({
  selector: 'fcs-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @HostBinding('class') public cssClass?: string;
  title = 'FC Sonnenburg';
  loading: boolean;

  constructor(
    private _overlayContainer: OverlayContainer,
    private _themeService: ThemeService
  ) {
    this.loading = true;
    this._themeService.theme$.subscribe((css) => this.setTheme(css));
  }

  /**
   * Setzt die globale CSS für das dynamische Wechseln der Themes
   * @private
   * @memberof AppComponent
   */
  private setTheme(css: string): void {
    this._overlayContainer
      .getContainerElement()
      .classList.remove(this.cssClass as string);

    this.cssClass = css;
    this._overlayContainer.getContainerElement().classList.add(this.cssClass);
  }
}
