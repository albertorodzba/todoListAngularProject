import { Component, Inject } from '@angular/core';
import { IAuthService } from '../../../interfaces/IAuthService';
import { User } from 'src/app/schema/User.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  full_Name: string = "";
  email: string = "";
  password: string = "";
  passwordVerification: string = "";

  constructor( @Inject('IAuthService') private _authService: IAuthService) {
  }

  signUp(){
    if(this.password !== this.passwordVerification){
      return console.log('Passwords must be the same');
    }
    const data: User = {full_Name: this.full_Name, email: this.email, password: this.password};
    console.log(data);
    this._authService.signUp(data);
  }
}
