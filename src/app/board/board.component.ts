import { Component, OnInit } from '@angular/core';
import { BoardService } from './services';
import { Post } from '@core/models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  posts: Post[]

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.getPosts().subscribe(
      res => this.posts = res
    )
  }

}
