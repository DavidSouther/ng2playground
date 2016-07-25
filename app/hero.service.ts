import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Hero} from './hero';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';
  constructor(private http: Http) {}
  list(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then((response) => response.json().data as Hero[])
        .catch(this.handleError);
  }
  get(id: number): Promise<Hero> {
    return this.list().then((heroes) => heroes.find(hero => hero.id === id));
  }

  private get headers(): Headers {
    return new Headers({'Content-Type': 'application/json'});
  }

  post(hero: Hero) {
    return this.http.post(this.heroesUrl, JSON.stringify(hero),
                          {headers: this.headers})
        .toPromise()
        .then((res) => res.json().data)
        .catch(this.handleError);
  }

  put(hero: Hero) {
    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then((res) => res.json().data)
        .catch(this.handleError);
  }

  delete (hero: Hero) {
    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .catch(this.handleError);
  }

  save(hero: Hero) {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  private handleError(error: any) {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
