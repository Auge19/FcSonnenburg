import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GalleryState } from '@shared/states/index';
import { galleryAdapter } from './gallery.reducers';

export const featureKey = 'gallery';

const getGalleryFeatureState = createFeatureSelector<GalleryState>(featureKey);

export const getEventsByYear = (props: { year: number }) =>
  createSelector(getGallery, (gallery) => {
    return gallery.filter((g) => g.year === props.year);
  });

export const getGallery = createSelector(
  getGalleryFeatureState,
  galleryAdapter.getSelectors().selectAll
);

export const getImagesByEventsAndYear = (props: {
  title: string;
  year: number;
}) =>
  createSelector(getGallery, (gallery) => {
    return gallery.find(
      (g) => g.title === props.title && g.year === props.year
    )!.images;
  });

export const getLoading = createSelector(
  getGalleryFeatureState,
  (state) => state.loading
);

export const getYears = createSelector(getGallery, (gallery) => {
  const yearSet = new Set<number>(gallery.map((g) => g.year));
  const result: number[] = [];
  yearSet.forEach((y) => result.push(y));
  result.sort((r1, r2) => (r1 < r2 ? 1 : -1));
  return result;
});
