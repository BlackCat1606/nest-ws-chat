import { Injectable } from '@nestjs/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@nest-chat/api-interface';

@Injectable()
export class UsersService {
  private users$: BehaviorSubject<Record<string, User>> = new BehaviorSubject(
    {}
  );

  getUsers(): Observable<User[]> {
    return this.users$.pipe(map(usersObj => Object.values<User>(usersObj)));
  }

  addUser(newUser: User): void {
    const newUsers = { ...this.users$.value, [newUser.socketId]: newUser };

    this.users$.next(newUsers);
  }

  removeUser(socketId: string): void {
    const modifiedUsers = this.users$.value;

    delete modifiedUsers[socketId];

    this.users$.next(modifiedUsers);
  }
}
