import {provideRouter, RouterConfig} from '@angular/router';

import {
  HeroesComponent,
  HeroDetailComponent,
  DashboardComponent
} from 'client/components/index';

const routes: RouterConfig = [
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

export const appRouterProviders = [provideRouter(routes)];
