import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {SebmGoogleMap, SebmGoogleMapMarker} from 'angular2-google-maps/core';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
    directives: [SebmGoogleMap, SebmGoogleMapMarker],
})
export class DashboardComponent implements OnInit {
    lat: number = 48;
    lng: number = 36;
    public heroes: Hero[] = [];
    private errorMessage: string;

    constructor(private _heroService: HeroService, private _router: Router) { }

    ngOnInit() {
            this._heroService.getHeroes()
                .subscribe(
                heroes => this.heroes = heroes,
                error => this.errorMessage = <any>error);
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}
