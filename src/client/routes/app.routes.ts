import {Routes, RouterModule} from '@angular/router';

import {
  HeroesComponent,
  HeroDetailComponent,
  DashboardComponent
} from 'client/components/index';

const appRoutes: Routes = [
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(appRoutes);