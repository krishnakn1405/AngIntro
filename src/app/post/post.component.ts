import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts2: Array<any>;

  constructor(private postService: PostService ) {
    // let postService = new PostService();
    this.posts2 = postService.postList;
  }

  title:string = "List of posts"
  messagePost:string = "Message sent"

  postParentMessage:string = 'Message from post parent'

  childMessage:string = "From child component"

  outputChildMessage:string = "Message from output decorator";

  @Output() messageEvent = new EventEmitter<string>();

  @Input() fromParent:string;

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage)
  }

  addNewData(){

    let newPost: Post = {
      id: 7,
      postTitle: "Post 7"
    }

    this.postService.addPost(newPost);
  }
}
