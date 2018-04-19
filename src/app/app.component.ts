import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-app';

  public message: string;

  public onSubmitMessage($event: any): void {
    if (!this.message) {
      this.message = '';
    }

    this.message += $event;
  }
}