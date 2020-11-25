import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  @Input()
  text: string = "";
  constructor() { }

  ngOnInit() {
    $(".advanced-search").on("click",function () {
      $('#advanced-search').toggle(300);
      $('body').toggleClass('no-scroll');
  });

  $('.advanced-close').on("click",function () {
      $('#advanced-search').fadeOut(300);
      $('body').removeClass('no-scroll');
  });
  }

}
