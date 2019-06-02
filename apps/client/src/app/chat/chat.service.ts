import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

import { User, ChatEvent } from '@nest-chat/api-interface';

@Injectable()
export class ChatService {
  constructor(private socket: Socket, private router: Router) {}

  public joinChat(user: User): void {
    this.socket.emit(ChatEvent.JoinChat, user);
    this.router.navigate(['chat', 'rooms']);
  }

  public getUsers(): Observable<User[]> {
    return this.socket.fromEvent(ChatEvent.UpdateUsers);
  }
}
