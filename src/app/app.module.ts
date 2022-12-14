import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { ConfigService } from './config.service';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { VBACalcComponent } from './vba-calc/vba-calc.component';
import { TechExperiencesComponent } from './tech-experiences/tech-experiences.component';
import { GetApiService } from './get-api.service';
import {HttpClientModule} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    HeaderMainComponent,
    ContactComponent,
    VBACalcComponent,
    TechExperiencesComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    
    RouterModule.forRoot([
    ])
    
  ],
  
  providers: [
    ConfigService,
    GetApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
