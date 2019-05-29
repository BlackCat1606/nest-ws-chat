import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ChatService } from './chat.service';
import { JoinChatComponent } from './join-chat/join-chat.component';

@NgModule({
  imports: [SharedModule, ChatRoutingModule],
  declarations: [JoinChatComponent],
  providers: [ChatService]
})
export class ChatModule {}
