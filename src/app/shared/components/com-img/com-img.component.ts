import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-com-img',
  templateUrl: './com-img.component.html',
  styleUrls: ['./com-img.component.scss']
})
export class ComImgComponent implements OnInit {
  @Input()
  src:string = "";
  @Input()
  alt:string = "";
  @Input()
  fit:string = "cover";
  @Input()
  longdesc:string = "";

  constructor() { }

  ngOnInit() {
  }

}
