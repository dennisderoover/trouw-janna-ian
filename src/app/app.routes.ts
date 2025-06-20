import { Routes } from '@angular/router';
import { CadeauComponent, DresscodeComponent, HomeComponent, LocatieComponent, RSVPComponent } from '.';

export const routes: Routes = [
  {
    path: 'dresscode',
    component: DresscodeComponent,
  },
  {
    path: 'locatie',
    component: LocatieComponent,
  },
  {
    path: 'cadeau',
    component: CadeauComponent,
  },
  {
    path: 'rsvp',
    component: RSVPComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];
