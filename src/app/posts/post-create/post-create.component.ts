import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

    // enteredValue = '';
    // newPost = 'NO CONTENT';

    // /*onAddPost(postInput: HTMLTextAreaElement){
    //     this.newPost = postInput.value;
    // }*/
    // onAddPost(){
    //     this.newPost = this.enteredValue;
    // }

    enteredTitle = '';
    enteredContent = '';
    //@Output() postCreated = new EventEmitter<Post>();

    constructor(public postService: PostService) {}
    onAddPost(form: NgForm) {
      if (form.invalid) {
        return;
      }
      this.postService.addPost(form.value.title, form.value.content);
      form.reset();
    }
  }
