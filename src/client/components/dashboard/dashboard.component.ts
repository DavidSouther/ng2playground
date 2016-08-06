import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from 'shared/hero';
import {HeroService} from 'client/services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'client/components/dashboard/dashboard.component.html',
  styleUrls: ['client/components/dashboard/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.list().then((heroes) => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
