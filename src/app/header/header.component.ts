/*  File:headerComponent.ts
    Description: Contains controller action for Page Header
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeWhile';

import { WindowEventsService } from '../services/windowEventsService/window-events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private windowEvents:WindowEventsService) { 
    windowEvents.eventService$.takeWhile(() => this.alive).subscribe(obj=> {
      this.windowObj=obj;
    });
  }

  ngOnInit() {  }
  ngOnDestroy() { this.alive=false;}
  windowObj:any={};
  alive:boolean=true;
  toggleMenuFlag:boolean=false;
  toggleMenuFn(){
    this.toggleMenuFlag=!this.toggleMenuFlag;
  }
}
