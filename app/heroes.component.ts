import {Component, OnInit, Input} from 'angular2/core';
import {Router} from 'angular2/router';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import {SearchPipe} from './search.pipe';
import {SearchBox} from './searchbox.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent, SearchBox],
    pipes: [SearchPipe]
})
export class HeroesComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;
    public errorMessage: string;
    @Input() term: string;


    constructor(private _heroService: HeroService, private _router: Router) { }

    getHeroes() {
        this._heroService.getHeroes()
            .subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any>error);
    }


    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}
