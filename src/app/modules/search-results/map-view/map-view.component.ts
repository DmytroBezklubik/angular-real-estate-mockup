import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})

export class MapViewComponent implements OnInit {
  @Output() saved = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  isSaveSearch: boolean = false;
  disabled: boolean = false;
  clicked: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    var setSumo = document.createElement('script');
    setSumo.type = 'text/javascript';
    setSumo.textContent = "$(function () { $('select').SumoSelect();});";
    var select = document.getElementsByTagName('script')[0];
    select.parentNode.insertBefore(setSumo, select);
  }

  
  ngOnInit() {
  }
  saveSearch(e) {
    console.log(e);
    this.isSaveSearch = true;
  }
  closePopup() {
    this.isSaveSearch = false;
  }
  open() {
    this.saved.emit();
  }
  closeMap() {
    this.close.emit();
  }
}
