import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.css']
})
export class Challenge2Component {

  name: string;
  email: string;
  address: string;

  userArray: Array<any> = [];

  onClick(){
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    })

    console.log(this.userArray);
  }

  onDelete(index){
    this.userArray.splice(index, 1);
  }
}
