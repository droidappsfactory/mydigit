import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { ProfileImageService } from '@app/core/serivces/profile-image.service';

@Component({
  selector: 'dig-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
  // animations: [
  //   trigger('openClose', [
  //     // ...
  //     state('open', style({
  //       height: '200px',
  //       opacity: 1,
  //       backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       height: '100px',
  //       opacity: 0.5,
  //       backgroundColor: 'green'
  //     })),
  //     transition('open => closed', [
  //       animate('1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ]),
  // ],
})
export class HomeComponent implements OnInit {
  isOpen = true;
  uploadedImageLink;

  @ViewChild('fileInput') fileInput: ElementRef;
  file: any;

  constructor(private _profileImageService: ProfileImageService) {}

  ngOnInit() {
    this.uploadedImageLink = 'http://localhost:8000/static/eLogo.png';
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }

  onFileChange(event) {
    console.log(event);
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file.size);
      if (this.file.size > 2e6) {
        this.clearFile();
      }
    }
  }

  clearFile() {
    this.fileInput.nativeElement.value = '';
  }

  uploadFile() {
    const fd = new FormData();
    fd.append('logo', this.file, this.file.name);
    fd.append('user', 'admin');
    console.log(fd);
    this._profileImageService.uploadProfileImage(fd).subscribe(data => {
      this.uploadedImageLink =
        'http://localhost:8000/static/admin' + this.file.name;
      console.log('link ', this.uploadedImageLink);
    });
  }
}
