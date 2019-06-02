import { Module } from '@nestjs/common';

import { ChatGateway } from './chat.gateway';
import { UsersService } from './users/users.service';
import { RoomsService } from './rooms/rooms.service';

@Module({
  providers: [ChatGateway, UsersService, RoomsService]
})
export class ChatModule {}
