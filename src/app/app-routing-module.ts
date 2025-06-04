import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListPageComponent } from './pages/job-list-page/job-list-page.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { JobApplyComponent } from './pages/job-apply/job-apply.component';
import { JobCreateComponent } from './components/job-create/job-create.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MyApplicationsComponent } from './pages/my-applications/my-applications.component';
import { ManageJobsComponent } from './pages/manage-jobs/manage-jobs.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', component: JobListPageComponent },
  { path: 'detail/:id', component: JobDetailComponent },
  { path: 'apply/:id', component: JobApplyComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'CANDIDATE' } },
  { path: 'create', component: JobCreateComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'RECRUITER' } },
  { path: 'my-applications', component: MyApplicationsComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'CANDIDATE' }},
  { path: 'manage-jobs', component: ManageJobsComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'RECRUITER' } },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
