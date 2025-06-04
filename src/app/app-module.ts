import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { JobListComponent } from './pages/job-list/job-list.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { JobApplyComponent } from './pages/job-apply/job-apply.component';
import { JobListItemComponent } from './components/job-list-item/job-list-item.component';
import { JobCreateComponent } from './components/job-create/job-create.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { JobListPageComponent } from './pages/job-list-page/job-list-page.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { MyApplicationsComponent } from './pages/my-applications/my-applications.component';
import { ManageJobsComponent } from './pages/manage-jobs/manage-jobs.component';
@NgModule({
  declarations: [
    AppComponent,
    JobApplyComponent,
    JobDetailComponent,
    JobListItemComponent,
    JobCreateComponent,
    JobSearchComponent,
    JobListComponent,
    TopBarComponent,
    LoginComponent,
    JobListPageComponent,
    RegisterComponent,
    MyApplicationsComponent,
    ManageJobsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    CommonModule, 
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
