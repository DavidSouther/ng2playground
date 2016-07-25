import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output
} from '@angular/core';
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
    <button (click)="save()">Save</button>
    `,
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit,
    OnDestroy {
  @Input() hero: Hero | null = null;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;
  private sub: any;
  constructor(private heroService: HeroService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      if (params['id'] !== undefined) {
        let id = parseInt(params['id'], 10);
        this.navigated = true;
        this.heroService.get(id).then((hero) => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  save() {
    this.heroService.save(this.hero !)
        .then((hero) => {
          this.hero = hero;
          this.goBack(hero);
        })
        .catch((error) => this.error = error);
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

  goBack(savedHero: Hero | null = null) {
    if (savedHero) this.close.emit(savedHero);
    if (this.navigated) window.history.back();
  }
}
