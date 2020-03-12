import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sep-display-palette',
  templateUrl: './sep-display-palette.component.html',
  styleUrls: ['./sep-display-palette.component.css']
})
export class SepDisplayPaletteComponent implements OnInit {

  constructor() {   }

  ngOnInit() { }
  @Input() dataArr:any;
  @Input() loadingFlag:boolean=true;
  alive:boolean=true;
}
