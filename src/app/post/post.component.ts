import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
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
}
