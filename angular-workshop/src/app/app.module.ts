import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from './app-material.module';
import { BackendService } from './_shared/services/backend/backend.service';
import { DescriptionComponent } from './description/description.component';
import { DataService } from './_shared/services/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BackendService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
