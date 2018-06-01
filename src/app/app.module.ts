import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component';
import { ItemComponent } from './item/item.component';
import { PlacesFilterPipe } from './common/pipe/places-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    ItemComponent,
    PlacesFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
