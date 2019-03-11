import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private _httpSerivce: HttpService) {}

  public signup(bodyValue) {
    const { ...body } = bodyValue;
    console.log(body);
    const url = environment.apiServer.signup;
    this._httpSerivce.Post(url, body).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  public login(bodyValue): Observable<any> {
    const { ...body } = bodyValue;
    console.log(body);
    const url = environment.apiServer.login;
    return this._httpSerivce.Post(url, body);
  }
}
