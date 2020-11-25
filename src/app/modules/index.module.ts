import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { TooltipModule } from 'ng2-tooltip-directive';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { AgmCoreModule, LAZY_MAPS_API_CONFIG } from '@agm/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IndexRoutingModule } from './index-routing.module';

import { IndexComponent } from './index.component';

import { ApiService } from '../services/api.service';

import { GoogleMapConfig } from '../configs/google-map.config';
import { SafePipe } from '../pipe/safe.pipe';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { SettingsComponent } from './settings/settings.component';
import { MyAdvertsComponent } from './my-adverts/my-adverts.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { SaveSearchComponent } from './search-results/save-search/save-search.component';
import { MapViewComponent } from './search-results/map-view/map-view.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    IndexComponent,
    SafePipe,
    HomeComponent,
    PostComponent,
    SettingsComponent,
    MyAdvertsComponent,
    FavoritesComponent,
    ProfileComponent,
    SearchResultsComponent,
    AdDetailsComponent,
    SaveSearchComponent,
    ContactComponent,
    MapViewComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    CoreModule,
    SlickCarouselModule,
    // TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    // NgMultiSelectDropDownModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AgmCoreModule.forRoot({}),
    NgbPopoverModule
  ],
  providers: [
    DatePipe,
    {
      provide: LAZY_MAPS_API_CONFIG,
      useClass: GoogleMapConfig
    }
  ]
})
export class IndexModule { }
