import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'dig-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  errormessage: string = null;
  loginForm: FormGroup;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private _fb: FormBuilder,
    private _authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: new FormControl('', []),
      password: new FormControl('', [])
    });

    this.afAuth.authState.subscribe(data => {
      if (data) {
        this.router.navigate(['/home']);
      }
    });
  }

  async googleLogin() {
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      () => {
        this.errormessage = null;
      },
      () => {
        this.errormessage = 'Please login to proceed';
      }
    );
  }

  login() {
    console.log(this.loginForm);

    this._authService.login(this.loginForm.value).subscribe(data => {
      console.log(data)
      this.router.navigate(['/']);
    });
  }
}
