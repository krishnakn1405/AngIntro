import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage: string = 'Message from parent component changed';
  message: string;
  fromChildOutput: string;

  userName:string;

  message2: string = 'Message from typescript file';
  imgUrl: string = 'https://www.mahithithana.in/backend/images/featured/robert-kiyosaki-all-book-summary-in-kannada.jpg';
  bool: boolean = false;

  textValue:string = "Value is coming from component";

  @ViewChild(PostComponent) childComp

  constructor() {
    console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage
  }

  receivedMessage($event) {
    this.fromChildOutput = $event;
  }

  buttonClick() {
    console.log('Button clicked works!');
  }

  onKeyup() {
    console.log("Key pressed!");
  }

  onKeyup2() {
    // console.log(this.userName)
    console.log(this.textValue);
  }
}
