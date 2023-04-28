import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAuthService } from 'src/app/interfaces/IAuthService';
import { User } from 'src/app/schema/User.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  // loginURL: string = 'https://fundamentals.up.railway.app/api/user/login';
  private loginURL: string = 'https://localhost:7243/api/user/login';
  private registerURL: string = 'https://localhost:7243/api/user';

  constructor(private _http: HttpClient) {}

  logIn(data: User): void {
    this._http
      .post(
        this.loginURL,
        { email: data.email, password: data.password },
        { responseType: 'text' }
      )
      .subscribe({
        next: (result) => {
          console.log(`result => ${result}`);
          localStorage.setItem('jwt', JSON.stringify(result));
        },
        error: (error: HttpErrorResponse) =>
          console.log(`There was an error => ${error.message.toString()}`),
      });
  }

  signUp(data: User): void {
    this._http
      .post(this.registerURL, {
        email: data.email,
        full_Name: data.full_Name,
        password: data.password,
      })
      .subscribe({
        next: (serverResponse) => console.log(serverResponse),
        error: (error: HttpErrorResponse) =>
          console.log(`There was an error => ${error.message}`),
      });
  }
}
