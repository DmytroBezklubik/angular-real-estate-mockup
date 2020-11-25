import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {

  @Input()
  text: string = "";
  constructor() { }

  ngOnInit() {
  }

}
