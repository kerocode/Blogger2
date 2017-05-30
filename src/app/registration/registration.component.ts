import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { OauthService } from '../services/oauth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  result;
  constructor(private fb: FormBuilder, private oauth: OauthService) {
    this.form = fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, emailValidation()]],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    }, { validator: matchingFields('Password', 'ConfirmPassword') });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form.hasError);
    console.log(this.form.value);
    this.oauth.register(this.form.value).subscribe(
      res => {
        console.log(res);
        this.result = res;
      }
    );
  }
  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }
}
function matchingFields(field1, field2) {
  return form => {
    if (form.controls[field1].value !== form.controls[field2].value) {
      return { misMatchedField: true };
    }
  };
}
function emailValidation() {
  return control => {
    // tslint:disable-next-line:max-line-length
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(control.value) ? null : { invalidEmail: true };
  };
}