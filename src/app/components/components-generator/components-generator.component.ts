import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import 'rxjs/add/operator/takeWhile';
import { SepServiceManagerService } from '../../services/serviceManager/sep-service-manager.service';
import { SepFilterDataService } from '../../services/sepFilterDataService/sep-filter-data.service';
import { WindowEventsService } from '../../services/windowEventsService/window-events.service';

@Component({
  selector: 'app-components-generator',
  templateUrl: './components-generator.component.html',
  styleUrls: ['./components-generator.component.css']
})
export class ComponentsGeneratorComponent implements OnInit, OnDestroy {

  constructor(private serviceManager:SepServiceManagerService,private getter:SepFilterDataService, private windowEvents:WindowEventsService) { 
    getter.dataService$.takeWhile(() => this.alive).subscribe(obj=> {
          Object.assign(this.filterParams,obj);
          if(this.filterParams.filter){
            Object.assign(this.filterParams.filter,this.category);
          }else{
            this.filterParams.filter=this.category;
          }
          if(!obj.page){
            this.filterParams.page.number="1";
          }
          this.getData(this.filterParams);
    });
    windowEvents.eventService$.takeWhile(() => this.alive).subscribe(obj=> {
      this.windowObj=obj;
    });
  }
  @Input()category:any;

  ngOnInit() {
    this.filterParams={filter:this.category,page:{size:"30",number:"1"},sort:"sales"};
    this.getData(this.filterParams);
  }

  ngOnDestroy(){ this.alive=false; this.navTo="right" }

  alive: boolean = true;
  windowObj:any={};
  filterParams:any;
  navTo:string;
  loadingFlag:boolean=true;
  getFilterData:any=[{
    hdrLbl:'Category',
    data:[{
      routeLink:'/Brushes',
      label:'Brushes',
      routerLinkActive:"active",
      routerLinkActiveOptions:"{exact:true}"
    },{
      routeLink:'/Makeup',
      label:'Makeup',
      routerLinkActive:"active",
      routerLinkActiveOptions:"{exact:true}"
    },{
      routeLink:'/Tools',
      label:'Tools',
      routerLinkActive:"active",
      routerLinkActiveOptions:"{exact:true}"
    }]
  },{
    hdrLbl:'Price',
    data:[{
      isSingleSelect:{type:'radio',name:'price',value:'',checked:true},
      price:'All'
    },{
      isSingleSelect:{type:'radio',name:'price',value:{price_lt:'2500'},checked:false},
      price:'Under $25'
    },{
      isSingleSelect:{type:'radio',name:'price',value:{price_gt:'2500',price_lt:'5000'},checked:false},
      price:'$25 - $50'
    },{
      isSingleSelect:{type:'radio',name:'price',value:{price_gt:'5000',price_lt:'10000'},checked:false},
      price:'$50 - $100'
    },{
      isSingleSelect:{type:'radio',name:'price',value:{price_gt:'10000',price_lt:'15000'},checked:false},
      price:'$100 - $150'
    },{
      isSingleSelect:{type:'radio',name:'price',value:{price_gt:'15000',price_lt:'30000'},checked:false},
      price:'$150 - $300'
    },{
      isSingleSelect:{type:'radio',name:'price',value:{price_gt:'30000'},checked:false},
      price:'Above $300'
    }]
  }];
  
  getTmplData:any=[];
  getData(params):any{
    this.loadingFlag=true;
    this.serviceManager.getAPI("https://sephora-api-frontend-test.herokuapp.com/products",params,'').subscribe(data=>{
      if(data){
        this.getTmplData=data;
      }
      this.loadingFlag=false;
    },err=>{
      if(err){
        this.getTmplData=err;
      }
      this.loadingFlag=false;
    });
  }

}