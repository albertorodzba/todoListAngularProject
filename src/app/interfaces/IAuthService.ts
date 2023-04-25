import { Observable } from 'rxjs';

import { User } from '../schema/user.interface';

export interface IAuthService {
  logIn(data: User): void;
  signUp(data: User): void;
}
