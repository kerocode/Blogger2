import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required, emailValidation()]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form.hasError);
  }
  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }
}
function emailValidation() {
  return control => {
    // tslint:disable-next-line:max-line-length
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(control.value) ? null : { invalidEmail: true };
  };
}
