import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LazyMapsAPILoaderConfigLiteral } from '@agm/core';
import { isEmpty } from 'lodash';

import { Token } from '../interfaces/token.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  token: Token;
  loginState;

  constructor(
    private http: HttpClient
  ) {

  }

  isValidToken(): boolean {
    return !isEmpty(this.token);
  }

  getToken(): Observable<Token> {
    return this.http.get<Token>(`${environment.apiUrl}/token`)
    .pipe(
      map((tokenRes: Token) => {
        if (tokenRes && tokenRes.access_token) {
          tokenRes.expires_in += Math.round(new Date().valueOf() / 1000);
          this.token = tokenRes;
        }
          return tokenRes;
        })
      );
  }

  setLoginState(s) {
    this.loginState = s;
    console.log(this.loginState);
  }
  getLoginState() {
    console.log(this.loginState);
    return this.loginState;
  }


  // getAdverts(): Observable<Advert[]> {
  //   return this.http.get<Advert[]>(`${environment.apiUrl}/adverts`);
  // }

}
