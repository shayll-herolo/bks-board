import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '@shared/shared.module';
import { BoardService } from './services';

const routes: Routes = [
  {path: '', component: BoardComponent}
]

@NgModule({
  declarations: [BoardComponent, PostComponent],
  providers: [BoardService],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BoardModule { }
