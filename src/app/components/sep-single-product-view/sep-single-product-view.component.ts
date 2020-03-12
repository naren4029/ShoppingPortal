import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SepServiceManagerService } from '../../services/serviceManager/sep-service-manager.service';


@Component({
  selector: 'app-sep-single-product-view',
  templateUrl: './sep-single-product-view.component.html',
  styleUrls: ['./sep-single-product-view.component.css']
})
export class SepSingleProductViewComponent implements OnInit {

  constructor(private serviceManager:SepServiceManagerService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
    this.zoomPos={};
    this.cor={x:0,y:0};
    this.getProductViewData={attributes:{price:0}};
  }
  getProductViewData:any;
  zoomPos:any;
  cor:any;
  event:MouseEvent;
  getData():any{
    this.serviceManager.getAPI("https://sephora-api-frontend-test.herokuapp.com/products",{id:this.route.snapshot.paramMap.get('id')},'/').subscribe(data=>{
      this.getProductViewData=data.data;
      console.log("this.getProductViewData==>",data.data);
    });
  }
  zoomEvent(event){
    if(!this.cor||this.cor.x<event.clientX){
      this.zoomPos.left= event.clientX+'px';
      this.cor.x= event.clientX;
    }
    if(!this.cor||this.cor.x>event.clientX){
      this.zoomPos.left= '-'+event.clientX+'px';
      this.cor.x= event.clientX;
    }
    if(!this.cor||this.cor.y<event.clientY){
      this.zoomPos.top=event.clientX+'px';
      this.cor.y= event.clientY;
    }
    if(!this.cor||this.cor.y>event.clientY){
      this.zoomPos.top='-'+event.clientX+'px';
      this.cor.y= event.clientY;
    }
  }
  resetZoom(){
    this.zoomPos={};
    this.cor={x:0,y:0};
  }
}
