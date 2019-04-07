import { Component, OnInit, ViewChild, TemplateRef, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'dig-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less']
})
export class ShellComponent implements OnInit {

  // @Inject(DOCUMENT) private document: any;

  user: any = {};
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(public afAuth: AngularFireAuth, public router: Router, private route: ActivatedRoute
    , @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    // this.afAuth.user.subscribe(data => {
    //   if (!data) {
    //     this.router.navigate(['/login']);
    //   }
    // });
    //this.user.image = 'https://www.w3schools.com/html/img_girl.jpg';
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  logout() {
    this.afAuth.auth.signOut();
  }


  redirectClicked() {
    this.document.location.href = 'https://stackoverflow.com';
  }
}
