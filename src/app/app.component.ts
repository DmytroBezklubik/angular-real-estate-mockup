import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kiwi-dom';
  constructor() {
    var jqueryUI = document.createElement('script');
    jqueryUI.type = 'text/javascript';
    jqueryUI.async = true;
    jqueryUI.src = '../../../assets/js/jquery-ui.js';
    var ju = document.getElementsByTagName('script')[0];
    ju.parentNode.insertBefore(jqueryUI, ju);

    // var importSumo = document.createElement('script');
    // importSumo.type = 'text/javascript';
    // importSumo.async = true;
    // importSumo.src = '../../../assets/js/jquery.sumoselect.min.js';
    // var s = document.getElementsByTagName('script')[0];
    // s.parentNode.insertBefore(importSumo, s);
    
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

    // var mapjs = document.createElement('script');
    // mapjs.type = 'text/javascript';
    // mapjs.async = true;
    // mapjs.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCPJpjD-qcR_yIxJnS8maR5W9KB0E3EzYI&callback=initAutocomplete&libraries=places&v=weekly';
    // var mj = document.getElementsByTagName('script')[4];
    // mj.parentNode.insertBefore(mapjs, mj);

    // var setSumo = document.createElement('script');
    // setSumo.type = 'text/javascript';
    // setSumo.textContent = "$(function () { $('select').SumoSelect();});";
    // var select = document.getElementsByTagName('script')[4];
    // select.parentNode.insertBefore(setSumo, select);
  }
}
