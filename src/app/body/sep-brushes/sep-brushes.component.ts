import { Component, OnInit } from '@angular/core';
import { WindowEventsService } from '../../services/windowEventsService/window-events.service';

@Component({
  selector: 'app-sep-brushes',
  templateUrl: './sep-brushes.component.html',
  styleUrls: ['./sep-brushes.component.css']
})
export class SepBrushesComponent implements OnInit {

  constructor(private windowEvents:WindowEventsService){}
  ngOnInit() {
    this.eventObj.clientX=window.innerWidth;
    this.eventObj.clientY=window.innerHeight;
    this.windowEvents.setEvents(this.eventObj);
  }
  eventObj:any={clientX:0,clientY:0};

}
