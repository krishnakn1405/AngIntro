import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title2: string = "Angular Course";
  count: number = 285645;
  dcValue: number = 3.85674;
  price: number = 99.99;
  today: Date = new Date();

  dummyText: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque autem quae voluptatum reprehenderit pariatur vitae veritatis animi, amet nihil temporibus repellat hic. Nemo totam velit quo quibusdam quisquam vero fuga ipsa pariatur? Ullam veritatis tenetur illum necessitatibus a. Accusantium impedit, id dignissimos odio provident eos repellat illum aliquam ea suscipit!";

  userdetails = {
    name: "User 1",
    city: "Newyork",
    countryCode: "US"
  }

  postArray2: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5"
  ]

  postObj: object = {
    id: 1,
    postTitle: "Post 1"
  }

  isActive:boolean = true;
  
  stepForm: string;

  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  objArray: Array<any> = []
  //   {id: 1, postTitle: 'Post 1'},
  //   {id: 2, postTitle: 'Post 2'},
  //   {id: 3, postTitle: 'Post 3'},
  //   {id: 4, postTitle: 'Post 4'},
  //   {id: 5, postTitle: 'Post 5'},
  // ]

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
    // console.log(this.childComp);

    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
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

  addNew(){
    this.objArray.push({ id: 6, postTitle: "Post 6"})
  }

  onDelete(index){
    // let index = this.objArray.indexOf(i);
    this.objArray.splice(index, 1);
  }

  onClick(status){
    this.stepForm = status;
  }

}
