import { Component, EventEmitter, Output } from '@angular/core';

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
    @Output() postCreated = new EventEmitter();

    onAddPost(){
      const post = {
        title: this.enteredTitle,
        content: this.enteredContent
      }
      this.postCreated.emit(post);
    }
  }
