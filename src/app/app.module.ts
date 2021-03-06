import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxAutoScrollModule } from "ngx-auto-scroll"

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ChatBarComponent } from './chat-bar/chat-bar.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { NicknameComponent } from './nickname/nickname.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ChatBarComponent,
    ChatHistoryComponent,
    ChatpageComponent,
    NicknameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxAutoScrollModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
