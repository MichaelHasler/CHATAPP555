import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  public message: string;

  public onSubmitMessage($event: any): void {
    if (!this.message) {
      this.message = '';
    }

    this.message += $event;
  }

}
