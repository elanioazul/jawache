import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'jawache-tutorial-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: any;

  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [ 
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ])
  


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      comment: this.comment,
      name: this.name,
      email: this.email
    });
    this.form.get("email").valueChanges.pipe(
      filter( () => this.form.valid )
    ).subscribe( (data: any) => console.log(JSON.stringify(data)))

  }

  onSubmit() {
    console.log("Form submitted with this contetn: " + this.form.value);
  }

}
