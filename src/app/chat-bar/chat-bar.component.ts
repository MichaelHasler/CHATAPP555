import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  @Output() submitMessage: EventEmitter<string> =  new EventEmitter();
  public chatMessage: string;

  constructor() { }

  ngOnInit() {
  }

  public addMessage(message: string): void {
    

    message = `${Person.Nickname} schrieb am ${new Date().toLocaleString('de')}: \n${message}`;

    this.submitMessage.emit(message);

    console.log(message);
    this.chatMessage = '';
    }

  
}