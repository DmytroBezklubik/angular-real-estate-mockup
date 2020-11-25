import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  @Input()
  text: string = "";
  constructor() { }

  ngOnInit() {
  //   $(window).on('load', function () {
  //     setTimeout(function () {
  //         $('#newsletter-modal').modal('show');
  //     }, 3000);
  // });
  }

}
