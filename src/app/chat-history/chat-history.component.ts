import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Person } from '../person';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {

  @Input() history: Array<object>;


  constructor(private chatService: ChatService) { }

  ngOnInit() {
    setInterval(() => {
      this.getHistory();
    }, 1000);
  }

  private getHistory(): void {
    this.chatService.getHistory()
      .subscribe(response => {
        this.history = [];
        var sideToBeDisplayed = 'left';
        for(var i = 0; i<response.length; i++){
          const date = new Date(response[i].date);

          if(Person.Nickname == response[i].nickname){
            sideToBeDisplayed = 'right';
          }
          this.history[i] = {
            nickname: response[i].nickname,
            message:  response[i].message,
            date: date.toLocaleString('de'),
            side: sideToBeDisplayed      
          };
          sideToBeDisplayed = 'left';
        }
      });
      console.log(this.history)
  }

}