import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.css']
})


export class Challenge3Component {
  
  onSubmit(f:NgForm)
  {
    console.log(f.value);
  }

  getValue() {
    console.log("fullNameNgModel");
  }
}
