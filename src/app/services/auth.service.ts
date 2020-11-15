import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  constructor(private http:HttpClient) {
      this.loadUserInfo();
  }
  loadUserInfo() {
    let userdata = this.userInfo.getValue();
    if (!userdata) {

      const access_token = localStorage.getItem('access_token');
      if (access_token) {
        userdata = this.jwtHelper.decodeToken(access_token);
        this.userInfo.next(userdata);
      }
    }
  }
  userLogin(login: any): Observable<boolean> {
    if (login && login.username && login.password) {
     
      return this.http.post("http://localhost:3000/auth/login",login).pipe(
        map((data: any) => {
          if (!data) {
            return false;
          }
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          const decodedUser = this.jwtHelper.decodeToken(data.access_token);
          localStorage.setItem('expiration', decodedUser.exp);
          this.userInfo.next(decodedUser);
          return true;
        })
      );
    }
    return of(false);
  }

  callRefershToken(payload){
    return this.http.post("http://localhost:3000/auth/refreshtoken",payload);
  }
}
