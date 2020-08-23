import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoardService } from '@core/services';
import { Post } from '@core/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSub: Subscription;

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.postsSub = this.boardService.posts$.subscribe(
      (posts) => (this.posts = posts)
    );
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
