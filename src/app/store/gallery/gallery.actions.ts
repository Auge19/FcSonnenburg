import { createAction, props } from '@ngrx/store';
import { Gallery } from '@shared/entities/gallery';

export enum GalleryActions {
  LoadGallery = '[GALLERY] LOAD GALLERY',
  LoadGallerySuccess = '[GALLERY] LOAD GALLERY SUCCES',
  LoadGalleryError = '[GALLERY] LOAD GALLERY ERROR'
}

export const loadGallery = createAction(GalleryActions.LoadGallery);
export const loadGallerySuccess = createAction(
  GalleryActions.LoadGallerySuccess,
  props<{ gallery: Gallery[] }>()
);
export const loadGalleryError = createAction(
  GalleryActions.LoadGalleryError,
  props<{ error: Error }>()
);
