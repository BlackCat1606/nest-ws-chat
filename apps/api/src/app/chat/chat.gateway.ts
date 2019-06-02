import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayDisconnect
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';

import { UsersService } from './users/users.service';

import { User, ChatEvent } from '@nest-chat/api-interface';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private usersService: UsersService) {}

  afterInit(): void {
    this.usersService
      .getUsers()
      .subscribe(users =>
        this.server.sockets.emit(ChatEvent.UpdateUsers, users)
      );
  }

  handleDisconnect(client: Client): void {
    this.usersService.removeUser(client.id);
  }

  @SubscribeMessage(ChatEvent.JoinChat)
  handleJoinServer(client: Client, payload: User): void {
    this.usersService.addUser({ ...payload, socketId: client.id });
  }
}
