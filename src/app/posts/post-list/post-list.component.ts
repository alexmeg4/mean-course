import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{

  posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postService: PostService){}
  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postService.getPostUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      })
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

 /*  posts = [
    { title: 'My First Post', content: 'This is my first post\'s content' },
    { title: 'My Second Post', content: 'This is my second post\'s content' },
    { title: 'My Third Post', content: 'This is my third post\'s content' },
  ] */

}
