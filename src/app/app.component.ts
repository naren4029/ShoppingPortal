/*  File:app.module.ts
    Description: Landing Page
*/
import { Component, OnInit } from '@angular/core';

import { WindowEventsService } from './services/windowEventsService/window-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private windowEvents:WindowEventsService){}
  ngOnInit(){
    let ref=this;
    window.onresize=(event)=>{
      ref.eventObj.clientX=window.innerWidth;
      ref.eventObj.clientY=window.innerHeight;
      ref.windowEvents.setEvents( ref.eventObj);
    };
    window.onload=(event)=>{
      ref.eventObj.clientX=window.innerWidth;
      ref.eventObj.clientY=window.innerHeight;
      ref.windowEvents.setEvents( ref.eventObj);
    };
  };
  eventObj:any={clientX:0,clientY:0};
}
