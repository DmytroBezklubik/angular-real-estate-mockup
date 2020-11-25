import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})
export class CookiePolicyComponent implements OnInit {

  @Input()
  text: string = "";
  constructor() { }

  ngOnInit() {
    $('#cookie-policy').fadeIn(300);
    $('.close-cookie-bottom, .close-cookie').on("click",function () {
      $('#cookie-policy').fadeOut(300);
  });
  }

}
