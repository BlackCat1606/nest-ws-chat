import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class ChatService {
  constructor(private socket: Socket) {}

  public joinServer(name: string): void {
    this.socket.emit('joinServer', name);
  }
}
