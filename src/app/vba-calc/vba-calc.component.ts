import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-vba-calc',
  templateUrl: './vba-calc.component.html',
  styleUrls: ['./vba-calc.component.css']
})
export class VBACalcComponent implements OnInit {

  vba = {
    title: '',
    title2:'',
    content:''
  }
  
  constructor( public config: ConfigService ) { }

  ngOnInit(): void {
    this.vba = this.config.getConfig().vba;
  }

}
