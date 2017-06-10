import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { GamesComponent } from './games/games.component';
import { AboutComponent } from './about/about.component';
import { MainFtrComponent } from './main-ftr/main-ftr.component';
import { MobileComponent } from './mobile/mobile.component';
import { FooterComponent } from './footer/footer.component';
import { JavaComponent } from './java/java.component';
import { WebsitesComponent } from './websites/websites.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    GamesComponent,
    AboutComponent,
    MainFtrComponent,
    MobileComponent,
    FooterComponent,
    JavaComponent,
    WebsitesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
