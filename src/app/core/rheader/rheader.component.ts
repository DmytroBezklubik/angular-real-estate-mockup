import { Component, OnInit, Input } from '@angular/core';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rheader',
  templateUrl: './rheader.component.html',
  styleUrls: ['./rheader.component.scss']
})
export class RheaderComponent implements OnInit {
  @Input()
  logo: string = 'http://placehold.it/350x150/000000';
  alarmCount: number = 100;
  loginStatus: boolean = false;
  status: boolean = true;
  menuState: boolean = false;
  getBadgeClassName: string;
  constructor(private apiSvc: ApiService) {
  }

  ngOnInit() {
    this.loginStatus = this.apiSvc.getLoginState();
    $('#advanced-search .pfrom-select').change(function() {
      console.log('price');
      $('#advanced-search .pfrom-select option:selected').each(function(i) {
          $('#advanced-search input.pfrom-input').val($(this).val());
      });
  });
  
  $('#advanced-search .pto-select').change(function() {
      $('#advanced-search .pto-select option:selected').each(function(i) {
          $('#advanced-search input.pto-input').val($(this).val());
      });
  });
  }
  getAlarmCount() {
    if(!this.alarmCount) {
      this.getBadgeClassName = 'hide';
      return 0
    }
    else if(this.alarmCount >=100) {
      this.getBadgeClassName = 'badge badge-full';
      return '.'
    }
    else {
      this.getBadgeClassName = 'badge';
      return this.alarmCount
    }
  }
  success(){
    this.loginStatus = true;
    this.apiSvc.setLoginState(true);
  }
  clickEvent(event) {
    this.menuState = false;
    this.status = !this.status;
  }
  hidemenu(){
    this.menuState = !this.menuState;
    this.status = !this.status;
  }

}
