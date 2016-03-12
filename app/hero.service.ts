import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Hero}           from './hero';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HeroService {
  constructor (private http: Http) {}

  private _token = "token=YIu7Ofztb9AzTZ0qi7HW58ZsBTZH9tV4";  
  private _heroesUrl = 'http://test-api.live.gbksoft.net/api/v1/users?'+this._token;  
  private _heroeUrl = 'http://test-api.live.gbksoft.net/api/v1/users/';
  // URL to web api
  getHeroes () {
    return this.http.get(this._heroesUrl)
                    .map(res => <Hero[]> res.json().result)
                    .catch(this.handleError);
  }
 private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  getHero(id: number) {
      //urgently should change this
     return this.http.get(this._heroeUrl + id +"?" + this._token)
                    .map(res => <Hero[]> res.json().result)
                    .catch(this.handleError);
  }
}
