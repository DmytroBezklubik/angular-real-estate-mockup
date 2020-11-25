import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  isShowNumber: boolean = false;
  disabled: boolean = false;
  clicked: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  
  ngOnInit() {
  }
  showNumber() {
    this.isShowNumber = true;
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
}
