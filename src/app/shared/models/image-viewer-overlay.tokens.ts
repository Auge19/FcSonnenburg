import { InjectionToken } from '@angular/core';
import { Image } from '@app/services/image-viewer.service'

export const IMAGE_VIEWER_DIALOG_DATA = new InjectionToken<Image>('IMAGE_VIEWER_DIALOG_DATA');
