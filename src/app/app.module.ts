import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {PlatAddComponent} from './plat-add/plat-add.component';
import {PlatComponent} from './plat/plat.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlatAdminComponent} from './plat-admin/plat-admin.component';
import {PlatEditComponent} from './plat-edit/plat-edit.component';
import {CategorieEditComponent} from './categorie-edit/categorie-edit.component';
import {CategorieAddComponent} from './categorie-add/categorie-add.component';

@NgModule({
  declarations: [AppComponent, PlatAddComponent, PlatComponent, PlatAdminComponent, PlatEditComponent, CategorieEditComponent, CategorieAddComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [DataService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
