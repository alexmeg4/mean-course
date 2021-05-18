import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "./post.model";

@Injectable({providedIn:'root'})    // allow dependency injection, creating one instance for all application
export class PostService{
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();
    
    getPosts() {
        return [...this.posts] // ... spread operator, used in this case to not use the original variable, which should not be changed
    }

    getPostUpdatedListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(title: string, content: string) {
        const post: Post = { title: title, content: content}
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }
}