import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JoinChatComponent } from './join-chat/join-chat.component';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'join',
    pathMatch: 'full'
  },
  {
    path: 'join',
    component: JoinChatComponent
  },
  {
    path: 'rooms',
    component: ChatRoomsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {}
