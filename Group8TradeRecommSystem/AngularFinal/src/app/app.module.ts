import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CompanyListComponent } from './company-list/company-list.component';
import { SectorListComponent } from './sector-list/sector-list.component';
import { SectorComponent } from './sector/sector.component';
import { ApiService } from './_services/api.service';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      BoardUserComponent,
      AddCompanyComponent,
      CompanyListComponent,
      SectorListComponent,
      SectorComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      MatTableModule
   ],
   providers: [
      authInterceptorProviders,
      SectorListComponent,
      ApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
