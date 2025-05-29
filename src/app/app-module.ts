import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';

import { JobListComponent } from './pages/job-list/job-list.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { JobApplyComponent } from './pages/job-apply/job-apply.component';
import { JobListItemComponent } from './components/job-list-item/job-list-item.component';
import { JobCreateComponent } from './components/job-create/job-create.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { JobListPageComponent } from './pages/job-list-page/job-list-page.component';

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
    JobListPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
