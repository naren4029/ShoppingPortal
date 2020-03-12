import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sep-filter-panel',
  templateUrl: './sep-filter-panel.component.html',
  styleUrls: ['./sep-filter-panel.component.css']
})
export class SepFilterPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() { this.toggFlag={0:false,1:false}; }
  @Input()dataArr:any;
  toggFlag:any;
  toggleCollapse(indx){
    this.toggFlag[indx]=!this.toggFlag[indx];
  }
}
