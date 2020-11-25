import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'

import { StripHtmlPipe } from './pipes/strip-html.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

import { PatternDirective } from './directives/pattern.directive';
import { PhoneMaskDirective } from './directives/phone.directive';
import { AdCardComponent } from './components/ad-card/ad-card.component';
import { ComImgComponent } from './components/com-img/com-img.component';
import { AltComponent } from './components/alt/alt.component';
import { LongdescComponent } from './components/longdesc/longdesc.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { ForgotPwdComponent } from './components/forgot-pwd/forgot-pwd.component';
import { LoginComponent } from './components/login/login.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { RegisterComponent } from './components/register/register.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

@NgModule({
  declarations: [
    StripHtmlPipe,
    SafeHtmlPipe,
    PatternDirective,
    PhoneMaskDirective,
    AdCardComponent,
    ComImgComponent,
    AltComponent,
    LongdescComponent,
    AdvancedSearchComponent,
    CookiePolicyComponent,
    ForgotPwdComponent,
    LoginComponent,
    NewsletterComponent,
    RegisterComponent,
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    NgbModule,
    FormsModule,
    QuillModule.forRoot()
  ],
  exports: [
    ComImgComponent,
    StripHtmlPipe,
    SafeHtmlPipe,
    AdCardComponent,
    PatternDirective,
    AdvancedSearchComponent,
    CookiePolicyComponent,
    ForgotPwdComponent,
    LoginComponent,
    NewsletterComponent,
    RegisterComponent,
    TextEditorComponent,
    PhoneMaskDirective
  ]
})
export class SharedModule { }
