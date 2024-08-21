import { Route } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Route[] = [
    {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    {path: 'crisis-list', component: CrisisListComponent},
    {path: 'heroes-list', component: HeroesListComponent},
    {path: '**', component: PageNotFoundComponent}
];