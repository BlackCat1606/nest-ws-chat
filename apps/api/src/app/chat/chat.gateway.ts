import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage('joinServer')
  handleJoinServer(client: any, payload: string): void {
    console.log('joinServer', { payload, client });
  }
}
