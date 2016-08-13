import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, XHRBackend} from '@angular/http';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from 'client/services/in-memory-data.service';

import {routing} from 'client/routes/app.routes';
import {AppComponent} from 'client/components/app/app.component';
import {HeroService} from 'client/services/hero.service';
import {
  HeroDetailComponent
} from 'client/components/hero-detail/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    HeroService,
    {provide: XHRBackend, useClass: InMemoryBackendService},
    {provide: SEED_DATA, useClass: InMemoryDataService}
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
