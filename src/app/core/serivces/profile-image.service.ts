import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from 'environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileImageService {
  constructor(private _httpService: HttpService) {}

  uploadProfileImage(file) {
    const endPoint = '/auth/upload';

    return this._httpService.Post(endPoint, file,{headers: new HttpHeaders({'user': 'admin'})});
  }
}
