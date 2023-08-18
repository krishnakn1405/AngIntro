import { Component } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-challenge4',
  templateUrl: './challenge4.component.html',
  styleUrls: ['./challenge4.component.css']
})
export class Challenge4Component
{
  form: any;
  emailRegex: string= "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";

  constructor()
  {
    this.form= new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        //Validators.pattern(this.emailRegex)
        Validators.email
      ]),
      address: new FormControl('', Validators.required)
    })
  }

  get Email()
  {
    return this.form.get('email');
  }

  get Address()
  {
    return this.form.get('address');
  }

  onSubmit()
  {
    console.log(this.form.value);
    
  }
}
