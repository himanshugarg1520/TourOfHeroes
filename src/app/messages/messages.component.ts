import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  // here we create constructor and give message service property to public because it display on ui
  constructor(public messageSerive:MessageService){
    
  }

}
