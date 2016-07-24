import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroService} from './hero.service';

import {Hero} from './hero';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  title: string = 'Tour of Heroes';
  heroes: Hero[] = [];
  selectedHero: Hero | null = null;

  constructor(private router: Router, private heroService: HeroService) {}

  loadHeroes(): void {
    this.heroService.getHeroes().then((heroes) => { this.heroes = heroes; });
  }

  ngOnInit(): void { this.loadHeroes(); }

  onSelect(hero: Hero): void { this.selectedHero = hero; }

  gotoDetail() {
    const link = ['/detail', this.selectedHero !.id];
    this.router.navigate(link);
  }
}
