import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'longdesc',
  templateUrl: './longdesc.component.html',
  styleUrls: ['./longdesc.component.scss']
})
export class LongdescComponent implements OnInit {

  @Input()
  longdesc: string = "";
  constructor() { }

  ngOnInit() {
  }

}
