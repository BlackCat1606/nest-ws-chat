import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayInit
} from '@nestjs/websockets';
import { Client } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection {
  @SubscribeMessage('message')
  handleMessage(client: Client, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage('joinServer')
  handleJoinServer(client: Client, payload: string): void {
    console.log('joinServer', { payload, client });
  }

  handleConnection(client: Client) {
    console.log('handleConnection', client.id);
  }
}
