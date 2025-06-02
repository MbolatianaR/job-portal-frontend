import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { JobApplyComponent } from './pages/job-apply/job-apply.component';
import { JobCreateComponent } from './components/job-create/job-create.component';
import { JobListPageComponent } from './pages/job-list-page/job-list-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: JobListPageComponent },
  { path: 'detail/:id', component: JobDetailComponent },
  { path: 'apply/:id', component: JobApplyComponent },
  { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  { path: 'create', component: JobCreateComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
