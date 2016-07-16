import {provideRouter, RouterConfig  } from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: RouterConfig = [
    {
        path: 'heroes',
        component: HeroComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo:'dashboard',
        terminal:true
    }
    
];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]



