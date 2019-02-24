import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'dig-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  errormessage: string = null;
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe(data => {
      if(data){
        this.router.navigate(['/home']);
      }
    });
  }

  async login() {

    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => {
      this.errormessage = null;
    },
    () => {
      this.errormessage = 'Please login to proceed';
    });
  }
}
