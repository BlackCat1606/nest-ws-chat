import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { User } from '@nest-chat/api-interface';
import { ChatService } from '../chat.service';

@Component({
  selector: 'nc-join-chat',
  templateUrl: './join-chat.component.html',
  styleUrls: ['./join-chat.component.scss']
})
export class JoinChatComponent {
  joinChatForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  users$: Observable<User[]>;

  constructor(private chatService: ChatService) {}

  public joinChat(): void {
    if (this.joinChatForm.valid) {
      this.chatService.joinChat(this.joinChatForm.value);
    } else {
      this.joinChatForm.markAllAsTouched();
    }
  }
}
