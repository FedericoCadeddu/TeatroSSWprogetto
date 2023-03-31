import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  @Output() KeyEvent = new EventEmitter<string>();
  getKey(key: string) {
    this.KeyEvent.emit(key);
  }
  

  ngOnInit() {
  }

}