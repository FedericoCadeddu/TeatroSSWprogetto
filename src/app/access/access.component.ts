import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  @Output() nuovoKeyEvent = new EventEmitter<string>();
  getKey(chiave: string) {
    this.nuovoKeyEvent.emit(chiave);
  }
  

  ngOnInit() {
  }

}