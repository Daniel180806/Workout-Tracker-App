import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage),
      },
      {
        path: 'workouts',
        loadComponent: () => import('./workouts/workouts.page').then(m => m.WorkoutsPage)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  },
  
  {
    path: 'exercise-details/:id',
    loadComponent: () => import('./exercise-details/exercise-details.page').then(m => m.ExerciseDetailsPage),
  },
  {
    path: 'workouts',
    loadComponent: () => import('./workouts/workouts.page').then(m => m.WorkoutsPage)
  },

];