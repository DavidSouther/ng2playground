import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <label>id: </label>
      <input [(ngModel)]="hero.name" placeholder="name" />
    </div>
    `
})
export class HeroDetailComponent {
  @Input() hero: Hero | null = null;
}