import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'dig-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
