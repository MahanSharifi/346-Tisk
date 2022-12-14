import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';



@Component({
  selector: 'app-tech-experiences',
  templateUrl: './tech-experiences.component.html',
  styleUrls: ['./tech-experiences.component.css']
})
export class TechExperiencesComponent implements OnInit {

displayed = true;
displayed2 = true;

  display0 = "none";
  display = "none";
  display2 = "none";
  display3 = "none";
  display4 = "none";
  displayNEW= "none";
  
  toggleDisplay() {
    this.displayed = !this.displayed;
  }

  toggleDisplay2() {
    this.displayed2 = !this.displayed2;
  }

  openModal0() {
    this.display0 = "block";
    
  }

  openModal() {
    this.display = "block";
  }
  openModal2() {
    this.display2 = "block";
  }

  openModal3() {
    this.display3 = "block";
  }

  openModal4() {
    this.display4 = "block";
  }

  openModal5() {
    this.displayNEW = "block";
    
  } 
  onCloseHandledNew() {
    this.displayNEW = "none";
  }

  onCloseHandled0() {
    this.display0 = "none";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onCloseHandled2() {
    this.display2 = "none";
  }

  onCloseHandled3() {
    this.display3 = "none";
  }

  onCloseHandled4() {
    this.display4 = "none";
  }

  tech = {
    title: '',
    sub: ''
  }

  coop = {
    title: '',
    contentA: '',
    contentB: '',
    contentC: '',
    contentD: '',
    date: ''
  }




  windows = {
    title: '',
    date: ''
  }
  


  constructor( public config: ConfigService ) { 
  }

  ngOnInit(): void {
    this.coop = this.config.getConfig().coop;
    this.tech = this.config.getConfig().tech;
    this.windows = this.config.getConfig().windows;
  }

}
