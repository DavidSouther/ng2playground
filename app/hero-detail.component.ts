import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <label>id: </label>
      <input [(ngModel)]="hero.name" placeholder="name" />
    </div>
    <button (click)="goBack()">Back</button>
    `,
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit,
    OnDestroy {
  hero: Hero | null = null;
  private sub: any;
  constructor(private heroService: HeroService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      let id = parseInt(params['id'], 10);
      this.heroService.getHero(id).then((hero) => this.hero = hero);
    });
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

  goBack() { window.history.back(); }
}
