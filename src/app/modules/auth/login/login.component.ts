import { Component, Inject } from '@angular/core';
import { IAuthService } from 'src/app/interfaces/IAuthService';
import { User } from 'src/app/schema/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  
  constructor(@Inject('IAuthService') private _loginService: IAuthService) {}

  login(){
    const data: User = {email: this.email, password: this.password };
    console.log(data);
    this._loginService.logIn(data);
  }
}
