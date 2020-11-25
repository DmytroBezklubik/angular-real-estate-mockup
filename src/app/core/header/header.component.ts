import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  alarmCount: number = 12;
  getBadgeClassName: string;
  loginStatus;
  status: boolean = true;
  menuState: boolean = false;

  constructor(private apiSvc: ApiService) {
  }

  ngOnInit() {
    this.loginStatus = this.apiSvc.getLoginState();
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
  setLoginState(e) {
    this.loginStatus = e;
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
