import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';

import { JoinChatComponent } from './join-chat/join-chat.component';

@NgModule({
  imports: [CommonModule, ChatRoutingModule],
  declarations: [JoinChatComponent]
})
export class ChatModule {}
