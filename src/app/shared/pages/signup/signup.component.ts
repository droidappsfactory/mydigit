import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { environment } from 'environments/environment';
import { HttpService } from '@app/core/http/http.service';

@Component({
  selector: 'dig-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;

  constructor(private _fb: FormBuilder, private _httpSerivce: HttpService) { }

  ngOnInit() {
    this.signupform = this._fb.group({
      email: new FormControl('', []),
      name: new FormControl('', []),
      password: new FormControl('', []),
      confirmpassword: new FormControl('', [])
    });
  }


  onSignupClicked() {
    console.log(this.signupform.value);
    const { ...body } = this.signupform.value;
    delete body['confirmpassword'];
    console.log(body);
    const url = environment.apiServer.signup;
    this._httpSerivce.Post(url, body).subscribe(data => {
      console.log(data);
    });
  }

}
