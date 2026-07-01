import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

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

import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GetConfirmationComponent } from './shared/component/get-confirmation/get-confirmation.component';

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
    GetConfirmationComponent
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
     MatDialogModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }