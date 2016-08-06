import {XHRBackend} from '@angular/http';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from 'client/services/in-memory-data.service';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from 'client/components/index';
import {appRouterProviders} from 'client/routes/app.routes';

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  {provide: XHRBackend, useClass: InMemoryBackendService},
  {provide: SEED_DATA, useClass: InMemoryDataService}
]);
