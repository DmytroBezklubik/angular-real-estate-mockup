import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  myForm: FormGroup;
  disabled: boolean = false;
  clicked: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder,) {
  }

  
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      ad_type_option: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  send(){

  }

  onContentChange($event) {
    
  }

}
