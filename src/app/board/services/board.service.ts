import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '@core/models';
import { map } from 'rxjs/operators';

@Injectable()
export class BoardService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http
      .get<Post[]>('/assets/mocks/posts.json')
      .pipe(
        map((posts) =>
          posts.sort(
            (a: Post, b: Post) =>
              new Date(a.date).getTime() - new Date(b.date).getTime()
          )
        )
      );
  }
}
