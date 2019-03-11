import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
  skipBroadcastOfTokenUsage?: boolean;
}

@Injectable()
export class HttpService {
  private api = environment.apiServer.base;

  constructor(private http: HttpClient) { }

  private _patchOptions(options: IRequestOptions): IRequestOptions {
    options = options || {};
    const skipBroadcastOfTokenUsage = options.skipBroadcastOfTokenUsage;
    const headers = options.headers ? options.headers : new HttpHeaders();
    // const { access_token, id_token } = this._getAccessAndIdentityToken(skipBroadcastOfTokenUsage);
    options.headers = headers;
    return options;
  }

  public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    const option = this._patchOptions(options);
    return this.http.get<T>(this.api + endPoint, option);
  }

  public Post<T>(endPoint: string, params?: Object, options?: IRequestOptions): Observable<T> {
    options = this._patchOptions(options);
    return this.http.post<T>(this.api + endPoint, params, options);
  }
}
