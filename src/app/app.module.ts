import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { NavHeaderComponent } from './header/nav-header/nav-header.component';
import { SearchComponent } from './header/search/search.component';
import { SidebareComponent } from './header/sidebare/sidebare.component';
import { ImageHeaderComponent } from './header/image-header/image-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    NavHeaderComponent,
    SearchComponent,
    SidebareComponent,
    ImageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
