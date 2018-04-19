import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
    this.submitMessage.emit(message);

    console.log(message);
    this.chatMessage = '';
  }
}