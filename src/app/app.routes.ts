import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent, title: 'Ahmed Wael | About' },
  { path: 'projects', component: ProjectsComponent, title: 'Ahmed Wael | Projects' },
  { path: 'contact', component: ContactComponent, title: 'Ahmed Wael | Contact' },

  { path: '', redirectTo: '/about', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent, title: 'Ahmed Wael | Not Found' }
];

