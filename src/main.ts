
//import { XHRBackend } from '@angular/http';




import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {APP_ROUTER_PROVIDERS} from './app/app.routes';

//import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
//import { InMemoryDataService }   from './app/services/in-memory-data.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, 
                         HTTP_PROVIDERS /* ,
                         { provide: XHRBackend, useClass: InMemoryBackendService },
                         { provide: SEED_DATA, useClass: InMemoryDataService }*/
                          ]);
