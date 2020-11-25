import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MapsAPILoader, MouseEvent } from '@agm/core';

declare var ol: any;
declare var kt: any;
@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  myForm: FormGroup;
  disabled: boolean = false;
  clicked: boolean = false;

  @Input()
  latitude: number = -23.8779431;
  @Input()
  longitude: number = -49.8046873;
  @Input()
  zoom: number = 15;
  @Input()
  address: string;
  private geoCoder;
  @Input()
  location: any = {
    lat: this.latitude,
    lng: this.longitude
  };
  map: any;

  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;
  constructor(
    private route: ActivatedRoute,
    
    private http: HttpClient,
    private fb: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    var setSumo = document.createElement('script');
    setSumo.type = 'text/javascript';
    setSumo.textContent = "$(function () { $('select').SumoSelect();});";
    var select = document.getElementsByTagName('script')[4];
    select.parentNode.insertBefore(setSumo, select);
    
    $(".advanced-slide").on("click", function () {
      $(".advanced-div").slideToggle();
      $(this).text($(this).text() === 'cancel' ? 'advanced' : 'cancel');
      });

      this.setOSM(this.longitude, this.latitude);

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.setOSM(this.longitude, this.latitude);
          this.zoom = 12;
        });
      });
    });


  //   var autocomplete = new kt.OsmNamesAutocomplete(
  //     'search', 'https://search.osmnames.org/');

  // autocomplete.registerCallback(function(item) {
  //   // alert(JSON.stringify(item, ' ', 2));
  // });


    // OSM Setting
    
    // this.map = new ol.Map({
    //   target: 'map',
    //   layers: [
    //     new ol.layer.Tile({
    //       source: new ol.source.OSM()
    //     })
    //   ],
    //   view: new ol.View({
    //     center: ol.proj.fromLonLat([21.0460, 52.2399]),
    //     zoom: 8
    //   })
    // });

    this.createForm();
  }
  changeAdd() {
    console.log('asdasdasd');
    this.setOSM(this.longitude, this.latitude);
  }
  
  setOSM(lon, lat) {
    console.log(lon, lat);
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([21.0460, 52.2399]),
        zoom: 8
      })
    });
    console.log(this.map);
  }
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }


  markerDragEnd($event: MouseEvent) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  viewCurrentLocation(event) {
    this.setCurrentLocation();
  }

  createForm() {
    this.myForm = this.fb.group({
      ad_type_option: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  add() {
    console.log('submit');
  }

  onContentChange(e) {
    console.log(e);
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
