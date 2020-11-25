import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


declare let gtag: Function;

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

    router.events.subscribe( (event: any) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-114671378-11', {
          'page_path': event.urlAfterRedirects
        });
      }
      window.scrollTo(0, 0);
    });
    
    // var jqueryUI = document.createElement('script');
    // jqueryUI.type = 'text/javascript';
    // jqueryUI.async = true;
    // jqueryUI.src = '../../../assets/js/jquery-ui.js';
    // var ju = document.getElementsByTagName('script')[0];
    // ju.parentNode.insertBefore(jqueryUI, ju);

    var importSumo = document.createElement('script');
    importSumo.type = 'text/javascript';
    importSumo.async = true;
    importSumo.src = '../../../assets/js/jquery.sumoselect.min.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(importSumo, s);
    
    var flickity = document.createElement('script');
    flickity.type = 'text/javascript';
    flickity.async = true;
    flickity.src = '../../../assets/js/flickity.js';
    var flic = document.getElementsByTagName('script')[4];
    flic.parentNode.insertBefore(flickity, flic);

    var flickityPkg = document.createElement('script');
    flickityPkg.type = 'text/javascript';
    flickityPkg.async = true;
    flickityPkg.src = '../../../assets/js/flickity.pkgd.min.js';
    var flicp = document.getElementsByTagName('script')[4];
    flicp.parentNode.insertBefore(flickityPkg, flicp);

    var setSumo = document.createElement('script');
    setSumo.type = 'text/javascript';
    setSumo.textContent = "$(function () { $('select').SumoSelect();});";
    var select = document.getElementsByTagName('script')[4];
    select.parentNode.insertBefore(setSumo, select);
  }

  ngOnInit() {
  }
}
