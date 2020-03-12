import { Component, OnInit } from '@angular/core';
import { WindowEventsService } from '../../services/windowEventsService/window-events.service';

@Component({
  selector: 'app-sep-home',
  templateUrl: './sep-home.component.html',
  styleUrls: ['./sep-home.component.css']
})
export class SepHomeComponent implements OnInit {

  constructor(private windowEvents:WindowEventsService){}
  ngOnInit() {
    this.eventObj.clientX=window.innerWidth;
    this.eventObj.clientY=window.innerHeight;
    this.windowEvents.setEvents(this.eventObj);
  }
  eventObj:any={clientX:0,clientY:0};

}
