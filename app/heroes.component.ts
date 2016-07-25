import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroService} from './hero.service';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
  title: string = 'Tour of Heroes';
  heroes: Hero[] = [];
  selectedHero: Hero | null = null;
  addingHero: boolean = false;
  error: any;

  constructor(private router: Router, private heroService: HeroService) {}

  loadHeroes(): void {
    this.heroService.list().then((heroes) => { this.heroes = heroes; });
  }

  ngOnInit(): void { this.loadHeroes(); }

  onSelect(hero: Hero): void { this.selectedHero = hero; }

  gotoDetail() {
    const link = ['/detail', this.selectedHero !.id];
    this.router.navigate(link);
  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) this.loadHeroes();
  }

  delete (hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService.delete(hero)
        .then(() => {
          this.heroes = this.heroes.filter((h) => h !== hero);
          if (this.selectedHero === hero) this.selectedHero = null;
        })
        .catch((error) => this.error = error);
  }
}
