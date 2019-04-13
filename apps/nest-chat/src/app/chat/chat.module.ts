import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';

import { JoinChatComponent } from './join-chat/join-chat.component';

@NgModule({
  imports: [SharedModule, ChatRoutingModule],
  declarations: [JoinChatComponent]
})
export class ChatModule {}
