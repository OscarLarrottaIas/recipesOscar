import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'form',
        loadComponent: () => import('./recipes/form/form.component').then(m => m.FormComponent)
    },
    {
        path: 'list',
        loadComponent: () => import('./recipes/list/list.component').then(m => m.ListComponent)
    }

];
