import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { SettingsComponent } from './settings/settings.component';
import { MyAdvertsComponent } from './my-adverts/my-adverts.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ProfileComponent } from './profile/profile.component';
import { MapViewComponent } from './search-results/map-view/map-view.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'my-adverts', component: MyAdvertsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'ad-details', component: AdDetailsComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'search-results/map-view', component: MapViewComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    // PlacesResolver,
    // ContactsResolver,
    // AuthorsResolver,
    // PostsResolver,
    // AuthorPostsResolver,
    // DepartmentsResolver,
  ]
})
export class IndexRoutingModule {}
