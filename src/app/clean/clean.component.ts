import { Component, OnInit, Input } from '@angular/core';
import {posto} from '../app.component';

@Component({
  selector: 'app-clean',
  templateUrl: './clean.component.html',
  styleUrls: ['./clean.component.css']
})
export class CleanComponent implements OnInit {
  @Input() postoC:posto;
  clean(){
    this.postoC.name = undefined;
}
  ngOnInit() {
  }
}