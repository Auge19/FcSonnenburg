import { EntityState } from '@ngrx/entity';
import { King } from '@shared/entities/king';

export interface KingState extends EntityState<King> {
  loading: boolean;
  error: Error | null;
}
