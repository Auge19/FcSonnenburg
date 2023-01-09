import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Gallery } from '@shared/entities/gallery';
import { GalleryState } from '@shared/states/gallery.state';
import * as GalleryActions from './gallery.actions';

export const galleryAdapter: EntityAdapter<Gallery> =
  createEntityAdapter<Gallery>();

export const initialGallery: GalleryState = {
  ids: [],
  entities: {},
  loading: false,
  error: null
};

export const initialState = galleryAdapter.getInitialState(initialGallery);

export const galleryReducer = createReducer(
  initialGallery,
  on(GalleryActions.loadGallery, (state) => {
    return { ...state, error: null, loading: true };
  }),
  on(GalleryActions.loadGallerySuccess, (state, { gallery }) => {
    return galleryAdapter.addMany(gallery, {
      ...state,
      error: null,
      loading: false
    });
  }),
  on(GalleryActions.loadGalleryError, (state, { error }) => {
    return { ...state, error: error, loading: false };
  })
);
