import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  pfrom= 'Min Price';
  pto= 'Max Price';
  isLogin: boolean = false;
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
    $(".advanced-slide").on("click", function () {
      $(".advanced-div").slideToggle();
      $(this).text($(this).text() === 'cancel' ? 'advanced' : 'cancel');
    });

    // $('.pfrom-select').change(function() {
    //   $('.pfrom-select option:selected').each(function(i) {
    //     alert($(this).val());
    //   });
    //   $(this).siblings('input.pfrom-input').val($(this).val());
    // });

    // $('.pto-select').change(function() {
    //   $('.pto-select option:selected').each(function(i) {
    //     alert($(this).val());
    //   });
    //   $(this).siblings('input.pto-input').val($(this).val());
    // });
  }
  getAddress() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = "latitude=" + position.coords.latitude;
        const longitude = "&longitude=" + position.coords.longitude;
        const query = latitude + longitude + "&localityLanguage=en";
        let bigdatacloud_api = "https://api.bigdatacloud.net/data/reverse-geocode-client?";
        bigdatacloud_api += query;
        this.http.get(bigdatacloud_api).subscribe(x => {
          var inputValue = <HTMLInputElement>document.getElementById("search-city");
          inputValue.value = x['locality'];
        })
      });
    }
  }
  navSlideConfig = {
    speed:3000,
    // slidesToShow:1,
    centerMode: true,
    autoplay: true,
    arrows: true,
    variableWidth: true,
    dragable: true,
    // adaptiveHeight: false,
    infinite: true,
    swipeToSlide: true,
    // edgeFriction: 0,
    slidesToShow: 4,
    // slidesToScroll: 1,
    dots:true,
    // prevArrow: '<button type="button" class="slick-prev">❮</button>',
    prevArrow: '<button type="button" class="slick-prev">❮</button>',
    nextArrow: '<button type="button" class="slick-next">❯</button>',
    // responsive:[
    //   {
    //     breakpoint: 2051,
    //     settings: {
    //       slidesToShow: 5,
    //     }
    //   },
    //   {
    //     breakpoint: 1901,
    //     settings: {
    //       slidesToShow: 5,
    //     }
    //   },
    //   {
    //     breakpoint: 1751,
    //     settings: {
    //       slidesToShow: 5
    //     }
    //   },
    //   {
    //     breakpoint: 1601,
    //     settings: {
    //       slidesToShow: 5
    //     }
    //   },
    //   {
    //     breakpoint: 1451,
    //     settings: {
    //       slidesToShow: 5
    //     }
    //   },
    //   {
    //     breakpoint: 1301,
    //     settings: {
    //       slidesToShow: 5
    //     }
    //   },
    //   {
    //     breakpoint: 1091,
    //     settings: {
    //       slidesToShow: 4
    //     }
    //   },
    //   {
    //     breakpoint: 901,
    //     settings: {
    //       slidesToShow: 5
    //     }
    //   },
    //   {
    //     breakpoint: 751,
    //     settings: {
    //       slidesToShow: 4
    //     }
    //   },
    //   {
    //     breakpoint: 601,
    //     settings: {
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 451,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 2
    //     }
    //   }
    // ]
  };
  slickInit(e) {
  }
  
  breakpoint(e) {
  }
  
  afterChange(e) {
    this.clicked = false;
    this.disabled = false;
  }
  
  beforeChange(e) {
    this.clicked = false;
    this.disabled = false;
  }

  isDisabled() {
    return this.disabled;
  }

  onMouseDown(event) {
    this.clicked = true;
  }

  onMouseUp(event) {
    this.clicked = false;
    this.disabled = false;
  }

  onMouseMove(event) {
    if (!this.clicked) {
      this.disabled = false;
    }

    if (this.clicked && !this.disabled) {
      this.disabled = true;
    }
  }
  // searchFormToggle(e) {
  //   console.log(e.target);
  //   const advancedTag = document.querySelector('.advanced-slide');
  //   const advancedDiv = document.querySelector('.advanced-div');
  //   console.log(advancedTag);
  //   if( advancedDiv.className == 'advanced-div hide' ) {
  //     advancedDiv.className = 'advanced-div';
  //   }else{
  //     advancedDiv.className = 'advanced-div hide';
  //   }
  //   if( e.target.textContent == 'advanced' ) {
  //     e.target.textContent = 'cancel';
  //   }else{
  //     e.target.textContent = 'advanced';
  //   }
  // }
}
