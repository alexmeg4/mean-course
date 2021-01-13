import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
 /*  posts = [
    { title: 'My First Post', content: 'This is my first post\'s content' },
    { title: 'My Second Post', content: 'This is my second post\'s content' },
    { title: 'My Third Post', content: 'This is my third post\'s content' },
  ] */

  @Input() posts = [];
}
