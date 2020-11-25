import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() success = new EventEmitter<any>();
  @Input()
  text: string = "";
  constructor() { }

  ngOnInit() {
  }
  register(e){this.success.emit();}

}
