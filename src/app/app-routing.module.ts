import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PlatComponent} from './plat/plat.component';
import {PlatAdminComponent} from './plat-admin/plat-admin.component';
import {PlatAddComponent} from './plat-add/plat-add.component';
import {PlatEditComponent} from './plat-edit/plat-edit.component';
import {CategorieAddComponent} from './categorie-add/categorie-add.component';
import {CategorieEditComponent} from './categorie-edit/categorie-edit.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'plats',
    component: PlatComponent
  },
  {
    path: 'plats-admin',
    component: PlatAdminComponent
  },
  {
    path: 'plat-add',
    component: PlatAddComponent
  },
  {
    path: 'plat-edit/:id',
    component: PlatEditComponent
  },
  {
    path: 'categorie-add',
    component: CategorieAddComponent
  },
  {
    path: 'categorie-edit/:id',
    component: CategorieEditComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
