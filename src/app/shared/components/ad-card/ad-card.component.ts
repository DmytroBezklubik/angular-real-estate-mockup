import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})
export class AdCardComponent implements OnInit {
  @Input()
  loginState: boolean;
  @Input()
  isOkazja: boolean;
  constructor() { }

  ngOnInit() {
  }
  getloginState() {
    return this.loginState;
  }
  getOkazja() {
    return this.isOkazja;
  }

}
