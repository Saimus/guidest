import { Injectable } from '@nestjs/common';
import { users } from '../seed/users.json';

@Injectable()
export class UsersService {
  getUsers(): any {
    return users;
  }
}
