import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'

@Component({
  selector: 'save-search-modal',
  templateUrl: './save-search.component.html',
  styleUrls: ['./save-search.component.scss']
})

export class SaveSearchComponent implements OnInit {
  @Output() saved = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  isSaveSearch: boolean = false;
  disabled: boolean = false;
  clicked: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  
  ngOnInit() {
  }
  save() {
    this.saved.emit();
  }
  closePopup() {
    this.close.emit();
  }

}
