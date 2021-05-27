import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'jawache-tutorial-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [ 
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ])
  
  reactiveform = new FormGroup({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    //this.reactiveform.get("comment").valueChanges.subscribe( data => console.log(JSON.stringify(data)))
  }

  onSubmit() {
    console.log("Form submitted with this contetn: " + this.reactiveform.value);
  }

}
