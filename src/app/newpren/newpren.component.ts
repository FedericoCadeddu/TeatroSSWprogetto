import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-newpren',
  templateUrl: './newpren.component.html',
  styleUrls: ['./newpren.component.css']
})
export class NewprenComponent implements OnInit {
  @Output() newPrenEvent = new EventEmitter<string>();
  constructor() { }
  newPren(newName: string){
    this.newPrenEvent.emit(newName);  
  }
  ngOnInit() {
  }

}