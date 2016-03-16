import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import 'rxjs/Rx';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router'; 
import {provide} from 'angular2/core';
import {enableProdMode} from 'angular2/core';

enableProdMode();
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HeroService,
    ANGULAR2_GOOGLE_MAPS_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);