import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { SignupComponent } from './frontoffice/signup/signup.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueCreateComponent } from './catalogue-create/catalogue-create.component';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';
import { CatalogueEditComponent } from './catalogue-edit/catalogue-edit.component';
import { CatalogueDetailsComponent } from './catalogue-details/catalogue-details.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'catalogues-list', component: CatalogueListComponent },
    { path: 'catalogues/:id', component: CatalogueDetailsComponent },
    { path: 'create', component: CatalogueCreateComponent },
    { path: 'edit/:id', component: CatalogueEditComponent },
    //{ path: 'catalogue-delete/:id', component: CatalogueDeleteComponent},
    //{ path: '', redirectTo: '/catalogues', pathMatch: 'full' }
    {path : 'catalogues', component: CatalogueComponent},
    {path  : 'upload/:id',component: UploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
