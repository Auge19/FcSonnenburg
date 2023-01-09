import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board.routing';
import { BoardService } from './board.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, BoardRoutingModule, SharedModule],
  providers: [BoardService]
})
export class BoardModule {}
