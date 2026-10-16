import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guards';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then(
        (m) => m.DASHBOARD_ROUTES,
      ),
      canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];