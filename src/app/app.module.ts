import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeDashboardComponent } from './shared/component/home-dashboard/home-dashboard.component';
import { ProductsDashboardComponent } from './shared/component/products-dashboard/products-dashboard.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FairsDashboardComponent } from './shared/component/fairs-dashboard/fairs-dashboard.component';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';

import { ProductComponent } from './shared/component/products-dashboard/product/product.component';
import { ProductFormComponent } from './shared/component/products-dashboard/product-form/product-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GetConfirmationComponent } from './shared/component/get-confirmation/get-confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './shared/component/user-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './shared/component/user-dashboard/user-details/user-details.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { FairCardComponent } from './shared/component/fairs-dashboard/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/component/fairs-dashboard/fair-details/fair-details.component';
import { AuthComponent } from './shared/component/auth/auth.component';
// import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    ProductsDashboardComponent,
    NavbarComponent,
    FairsDashboardComponent,
    UserDashboardComponent,
    ProductComponent,

    ProductFormComponent,
    GetConfirmationComponent,
    UserFormComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    FairCardComponent,
    FairDetailsComponent,
    AuthComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
     MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }