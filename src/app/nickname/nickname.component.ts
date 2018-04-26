import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

  public nickname: string;

  public message: string;
  
  constructor(private router: Router)  { }

  ngOnInit() {
  }

  public createNickname(nickname: string): void {    
    if (!nickname) { 
      //alert('kein Nickname voranden...')
      this.message = 'Wähle einen Nicknamen!'
    } else {
      Person.Nickname = nickname;
      this.router.navigate(['chatpage'])
    }
  
  }
}
