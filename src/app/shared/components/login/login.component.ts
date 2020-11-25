import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() success = new EventEmitter<any>();
  @Input()
  text: string = "";
  constructor() { }

  ngOnInit() {
  //   $(".login-popup").on("click",function () {
  //     $('#login-modal-section').toggle(300);
  //     $('body').toggleClass('no-scroll');
  // });

  // $('.advanced-close').on("click",function () {
  //     $('#login-modal-section').fadeOut(300);
  //     $('body').removeClass('no-scroll');
  // });
  }

  login(e) {
    this.success.emit();
  }

}
