import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { JobDetail } from './pages/job-detail/job-detail';
import { JobApply } from './pages/job-apply/job-apply';
import { JobListComponent } from './pages/job-list/job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JobDetail,
    JobApply,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
