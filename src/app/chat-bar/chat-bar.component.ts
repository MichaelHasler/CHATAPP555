import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../person';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  @Output() submitMessage: EventEmitter<string> =  new EventEmitter();

  public chatMessage: string;

  Nick = (Person.Nickname);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  public addMessage(message: string): void {

    if (!Person.Nickname) {
      this.router.navigate(['home'])
      alert('kein Nicknamen vorhanden.')
    } else {
      message = `${Person.Nickname} schrieb am ${new Date().toLocaleString('de')}: \n${message}`;
      //alert(Person.Nickname)
      this.submitMessage.emit(message);

      console.log(message);
      this.chatMessage = '';
      }
    }

}