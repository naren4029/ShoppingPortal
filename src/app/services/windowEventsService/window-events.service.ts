import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WindowEventsService {

  constructor() { }
  private eve:any = new Subject<any>();

  eventService$ = this.eve.asObservable();

  setEvents(params){
    this.eve.next(params);
  }
}
