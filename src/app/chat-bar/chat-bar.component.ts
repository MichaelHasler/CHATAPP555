import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../person';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes, Router } from '@angular/router';
import { ChatMessage } from '../chat-message';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  @Output() submitMessage: EventEmitter<string> =  new EventEmitter();

  public chatMessage: string;
  public message: string;
  Nick = (Person.Nickname);

  constructor(private router: Router, private chatService: ChatService) { }

  ngOnInit() {
  }

  
  public addMessage(message: string): void {

    if (!Person.Nickname) {
      this.router.navigate(['home'])
      alert('kein Nicknamen vorhanden.')

    } else {

      this.message = '';
      const messageToSend: ChatMessage = new ChatMessage();

      messageToSend.message = message;
      messageToSend.nickname = Person.Nickname;

      this.chatService.addToHistory(messageToSend)
        .subscribe(response => {
          this.chatMessage = '';
        },
          (error: any) => console.log(<any>error));
      }
    }

}