import { Injectable } from '@angular/core';
import { uuid } from '@core/helpers';
import { Post } from '@core/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BoardService {
  posts$: BehaviorSubject<Post[]>;
  constructor() {
    let localPosts: Post[] = [];
    try {
      localPosts = JSON.parse(localStorage.getItem('posts')) || [];
    } catch {}
    this.posts$ = new BehaviorSubject<Post[]>(localPosts);
  }

  addPost(author: string, content: string) {
    const posts = this.posts$.value.concat({
      author,
      content,
      id: uuid(),
      date: new Date().toISOString(),
    });
    this.savePosts(posts);
  }

  editPost(id: string, author: string, content: string) {
    const posts = this.posts$.value;
    const postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex !== -1) {
      const newPost: Post = {
        ...posts[postIndex],
        author,
        content,
      };
      posts.splice(postIndex, 1);
      const newPosts = posts.concat(newPost);
      this.savePosts(newPosts);
    }
  }

  deletePost(id: string) {
    const posts = this.posts$.value;
    const postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex !== -1) {
      posts.splice(postIndex, 1);
      this.savePosts(posts);
    }
  }

  private sortPostsByDate(posts: Post[]) {
    return posts.sort(
      (a: Post, b: Post) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  private savePosts(posts: Post[]) {
    this.posts$.next(this.sortPostsByDate(posts));
    localStorage.setItem('posts', JSON.stringify(posts));
  }
}
