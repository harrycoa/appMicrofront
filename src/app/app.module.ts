import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],

})
export class AppModule {

  constructor(
    private injector: Injector,
  ) { }

  // tslint:disable-next-line:typedef
  ngDoBootstrap() {
    const weathercomponent = createCustomElement(WeatherComponent, {injector: this.injector});
    customElements.define('app-weather', weathercomponent);
  }

 }


 /* ng add @andular/elements
 npm run weathercardbuild
 /* "weathercardbuild": "ng build --prod --output-hashing=none && node ./mergelib.js" */*/
