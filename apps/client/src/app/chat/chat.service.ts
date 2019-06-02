import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Observable, BehaviorSubject } from 'rxjs';

import { User, ChatEvent } from '@nest-chat/api-interface';

@Injectable()
export class ChatService {
  private usersOnline$: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor(private socket: Socket, private router: Router) {
    this.socket
      .fromEvent(ChatEvent.UpdateUsers)
      .subscribe((data: User[]) => this.usersOnline$.next(data));
  }

  public joinChat(user: User): void {
    this.socket.emit(ChatEvent.JoinChat, user);
    this.router.navigate(['chat', 'rooms']);
  }

  public getUsers(): Observable<User[]> {
    return this.usersOnline$.asObservable();
  }
}
