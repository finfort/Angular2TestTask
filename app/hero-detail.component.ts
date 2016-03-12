import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css'],
    inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
    public hero: Hero[];
    public errorMessage: string;

    constructor(private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .subscribe(
            hero => this.hero = hero,
            error => this.errorMessage = <any>error);

    }

    goBack() {
        window.history.back();
    }
}

