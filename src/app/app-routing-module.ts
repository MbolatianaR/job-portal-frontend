import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './pages/job-list/job-list.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { JobApplyComponent } from './pages/job-apply/job-apply.component';
import { JobCreateComponent } from './components/job-create/job-create.component';

const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'detail/:id', component: JobDetailComponent },
  { path: 'apply/:id', component: JobApplyComponent },
  { path: 'create', component: JobCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
