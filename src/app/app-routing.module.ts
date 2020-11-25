import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

import { AuthGuard } from './guards/auth.guard';

import { IndexComponent } from './modules/index.component';
import { IndexModule } from './modules/index.module';

// import { SettingsResolver } from './resolves/settings.resolve';
// import { EventsResolver } from './resolves/events.resolve';
// import { NewsResolver } from './resolves/news.resolve';
// import { AlertsResolver } from './resolves/alerts.resolve';
// import { ServiceGroupsResolver } from './resolves/group.resolve';
// import { ServicesResolver } from './resolves/services.resolve';
// import { DepartmentsResolver } from './resolves/departments.resolve';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    // canActivate: [AuthGuard],
    resolve: {
      // events: EventsResolver,
      // news: NewsResolver,
      // alerts: AlertsResolver,
      // settings: SettingsResolver,
      // groups: ServiceGroupsResolver,
      // services: ServicesResolver,
      // departments: DepartmentsResolver,
    },
    children: [
      {
        path: '',
        loadChildren: './modules/index.module#IndexModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // EventsResolver,
    // NewsResolver,
    // AlertsResolver,
    // SettingsResolver,
    // ServiceGroupsResolver,
    // ServicesResolver,
    // DepartmentsResolver,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },

  ]
})
export class AppRoutingModule { }
