import { Component, OnInit } from '@angular/core';
import { WindowEventsService } from '../../services/windowEventsService/window-events.service';

@Component({
  selector: 'app-sep-makeup',
  templateUrl: './sep-makeup.component.html',
  styleUrls: ['./sep-makeup.component.css']
})
export class SepMakeupComponent implements OnInit {

  constructor(private windowEvents:WindowEventsService){}
  ngOnInit() {
    this.eventObj.clientX=window.innerWidth;
    this.eventObj.clientY=window.innerHeight;
    this.windowEvents.setEvents(this.eventObj);
  }
  eventObj:any={clientX:0,clientY:0};

}
