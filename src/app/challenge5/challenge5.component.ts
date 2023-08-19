import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../validators/nospace.validators';

@Component({
  selector: 'app-challenge5',
  templateUrl: './challenge5.component.html',
  styleUrls: ['./challenge5.component.css']
})
export class Challenge5Component {

  form: any;

  constructor(fb: FormBuilder)
  {
    this.form= fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        noSpace.noSpaceValidation
      ]],

      password: ['', Validators.required]
    })
  }

  get fc(){
    return this.form.controls;
  }
}
