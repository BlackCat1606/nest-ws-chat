import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '@nest-chat/api-interface';
import { ChatService } from '../chat.service';

@Component({
  selector: 'nc-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.scss']
})
export class ChatRoomsComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.users$ = this.chatService.getUsers();
  }
}
