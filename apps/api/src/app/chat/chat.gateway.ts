import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection
} from '@nestjs/websockets';
import { Client } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection {
  handleConnection(client: Client): void {
    console.log('handleConnection', client.id);
  }

  @SubscribeMessage('joinServer')
  handleJoinServer(client: Client, payload: string): void {
    console.log('joinServer', { payload, client });
  }
}
