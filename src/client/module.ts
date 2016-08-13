import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, XHRBackend} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';

import * as components from './components/index';
import {InMemoryDataService, HeroService} from './services/index';
import {routing} from './routes/index';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    HeroService,
    {provide: XHRBackend, useClass: InMemoryBackendService},
    {provide: SEED_DATA, useClass: InMemoryDataService}
  ],
  declarations: [...Object.values(components)],
  bootstrap: [components.AppComponent]
})
export class AppModule {}
