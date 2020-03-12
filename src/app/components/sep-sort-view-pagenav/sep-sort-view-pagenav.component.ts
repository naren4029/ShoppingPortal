import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import 'rxjs/add/operator/takeWhile';

import { SepFilterDataService } from '../../services/sepFilterDataService/sep-filter-data.service';
import { WindowEventsService } from '../../services/windowEventsService/window-events.service';

@Component({
  selector: 'app-sep-sort-view-pagenav',
  templateUrl: './sep-sort-view-pagenav.component.html',
  styleUrls: ['./sep-sort-view-pagenav.component.css']
})
export class SepSortViewPagenavComponent implements OnInit, OnChanges, OnDestroy {

  constructor(private setter:SepFilterDataService, private windowEvents:WindowEventsService) {
    windowEvents.eventService$.takeWhile(() => this.alive).subscribe(obj=> {
      this.windowObj=obj;
    });
  }
  @Input() pagesInfo:any;
  @Input() dataArr:any;
  ngOnInit() {
    this.sortData=[
      {label:"Best Selling",value:"sales"},
      {label:"Newest",value:"published_at"},
      {label:"Top Rated",value:"rating"},
      {label:"Price: Low to High",value:"price"},
      {label:"Price: High to Low",value:"-price"}
    ];
    this.viewData=[
      {label:"30",value:"30"},
      {label:"60",value:"60"},
      {label:"120",value:"120"}
    ];
  }
  ngOnChanges(){
    if(!this.obj){
      this.obj={page:{number:"1",size:"30"},sort:"sales"};
    }
    if(this.pagesInfo && this.pagesInfo.last){
      decodeURI(this.pagesInfo.last.split('?')[1]).split("&").forEach((value)=>{
        if(value.indexOf("page[number]")>-1){
          this.lastPgNum=value.split("=")[1];
        }
      });
    }else{
      this.lastPgNum=this.obj.page.number;
    }
  }
  ngOnDestroy(){ this.alive=false;  }

  obj:any;
  lastPgNum:any;
  sortData:any;
  viewData:any;
  windowObj:any={};
  alive: boolean = true;
  toggleExpFlag: boolean = false;

  firstPgFn(){
    this.obj.page.number=1;
    this.onSelectionChange(this.obj,'number');
  }
  prevPgFn(){
    if(this.obj.page.number>1){
      this.obj.page.number--;
      this.onSelectionChange(this.obj,'number');
    }
  }
  nextPgFn(){
    if(this.obj.page.number<this.lastPgNum){
      this.obj.page.number++;
      this.onSelectionChange(this.obj,'number');
    }
  }
  lastPgFn(){
    this.obj.page.number=this.lastPgNum;
    this.onSelectionChange(this.obj,'number');
  }
  onSelectionChange(obj,type){
    if(type=='size'||type=='sort'){
      obj.page.number="1";
    }
    this.setter.setData(obj);
  }
  toggleExpFn(){
    this.toggleExpFlag=!this.toggleExpFlag;
  }
}
