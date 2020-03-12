import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SepFilterDataService {

  constructor() { }
  private dataHldr = new Subject<any>();

  dataService$ = this.dataHldr.asObservable();

  setData(params){
    this.dataHldr.next(params);
  }
}
