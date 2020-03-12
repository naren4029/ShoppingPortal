import { Component, OnInit, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SepFilterDataService } from '../../../services/sepFilterDataService/sep-filter-data.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  constructor(private setter:SepFilterDataService) {this.dataObj=""; }

  ngOnInit() {  }
  @Input() dataArr:String[];
  dataObj:any;
  onSelectionChange(obj){
      let data={filter:obj};
      this.setter.setData(data);
  }
  
}
