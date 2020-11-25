import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {
  isSaveSearch: boolean = false;
  isMapView: boolean = false;
  disabled: boolean = false;
  clicked: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  
  ngOnInit() {
    var setSumo = document.createElement('script');
    setSumo.type = 'text/javascript';
    setSumo.textContent = "$(function () { $('select').SumoSelect();});";
    var select = document.getElementsByTagName('script')[4];
    select.parentNode.insertBefore(setSumo, select);
    
    $('.filter-toggler, .advanced-close-search-results').on("click", function () {
      $("#result-filter-toggled").toggle(300);
      $(".reset-filter").fadeToggle(300);

      // noinspection ES6ConvertVarToLetConst
      var filterToggler = $(".filter-toggler");

      $(filterToggler).text($(filterToggler).text() === 'apply filter' ? 'filter' : 'apply filter');


  });

  // SEARCH RESULTS COLUMN PICKER
  // noinspection ES6ConvertVarToLetConst
  var addColumn = $(".addcolumn");

   $('.column').on("click",function () {
          if ($(addColumn).hasClass('col-12')) {
              $(addColumn).addClass('col-6');
              $(addColumn).removeClass('col-12');
              $(".column").html('<img src="../../../assets/images/one-column.svg" class="img-fluid column-selector">');
          } else {
              $(addColumn).removeClass('col-6');
              $(addColumn).addClass('col-12');
              $(".column").html('<img src="../../../assets/images/two-column.svg" class="img-fluid column-selector">');
          }
      });

      if ($(addColumn).hasClass('col-12')) {
          $(".column").html('<img src="../../../assets/images/two-column.svg" class="img-fluid column-selector">');
      } else {
          $(".column").html('<img src="../../../assets/images/one-column.svg" class="img-fluid column-selector">');
      }
  }

  saveSearch(e) {
    console.log(e);
    this.isSaveSearch = true;
  }
  closePopup() {
    this.isSaveSearch = false;
  }
  openMap(e) {
    this.isMapView = true;
  }
  closeMap() {
    this.isMapView = false;
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
