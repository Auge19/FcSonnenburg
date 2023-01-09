import { EntityState } from '@ngrx/entity';
import { Gallery } from '@shared/entities/gallery';

export interface GalleryState extends EntityState<Gallery> {
  loading: boolean;
  error: Error | null;
}
