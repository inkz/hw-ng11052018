import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ItemComponent } from './item/item.component';
import { PlacesFilterPipe } from './common/pipe/places-filter.pipe';
import { ListComponent } from './list/list.component';
import { MenuPipe } from './common/pipe/menu.pipe';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ItemComponent,
    PlacesFilterPipe,
    ListComponent,
    MenuPipe,
    ListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
