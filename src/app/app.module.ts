import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { SignupComponent } from './frontoffice/signup/signup.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';
import { CatalogueDetailsComponent } from './catalogue-details/catalogue-details.component';
import { CatalogueCreateComponent } from './catalogue-create/catalogue-create.component';
import { CatalogueEditComponent } from './catalogue-edit/catalogue-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogueService } from './catalogue.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    CatalogueComponent,
    CatalogueListComponent,
    CatalogueDetailsComponent,
    CatalogueCreateComponent,
    CatalogueEditComponent,
    UploadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [CatalogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
