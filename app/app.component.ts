import {Component, OnInit} from 'angular2/core';
// import {FBConnector} from 'ng2-facebook/ng2-facebook';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {SearchBox} from './searchbox.component';

import {HeroService} from './hero.service';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {ProfileComponent} from './profile.component'
import {Router} from 'angular2/router'

declare var Auth0Lock;

@Component({
    selector: 'my-map',
    templateUrl: 'app/app.component.html',

    styleUrls: ['app/app.component.css'],

    directives: [ROUTER_DIRECTIVES, SearchBox],
    providers: [HeroService]
})
@RouteConfig([
    { path: '/', redirectTo: ['Dashboard'] },
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/heroes', name: 'Heroes', component: HeroesComponent },
    { path: '/profile', name: 'Profile', component: ProfileComponent },
    { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent }
])
export class AppComponent {

    public title = 'Test task';
    //YIu7Ofztb9AzTZ0qi7HW58ZsBTZH9tV4
    lock = new Auth0Lock('4acINuDcdFU41gzJT34kPY4wPKFDD4dJ', 'gbktest.auth0.com');
    jwtHelper: JwtHelper = new JwtHelper();
    constructor(private router: Router){}

    login() {
        var self = this;
        this.lock.show((err: string, profile: string, id_token: string) => {

            if (err) {
                throw new Error(err);
            }

            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token);

            console.log(
                profile,
                this.jwtHelper.decodeToken(id_token),
                this.jwtHelper.getTokenExpirationDate(id_token),
                this.jwtHelper.isTokenExpired(id_token)
            );

            self.loggedIn();
            this.router.navigate(['Profile']);
        });
    }

    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.loggedIn();
        this.router.navigate(['Dashboard']);

    }

    loggedIn() {
        return tokenNotExpired();
    }


}