import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientsComponent } from './components/add-clients/add-clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsClientsComponent } from './components/details-clients/details-clients.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { LoginComponent } from './components/login/login.component';
import { NotFindComponent } from './components/not-find/not-find.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthGuardGuard } from './gaurds/auth-guard.guard';

const routes: Routes = [
  {path: "", component: DashboardComponent , canActivate:[AuthGuardGuard]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "client/add", component: AddClientsComponent , canActivate:[AuthGuardGuard]},
  {path: "client/edit/:id", component: EditClientsComponent , canActivate:[AuthGuardGuard]},
  {path: "client/:id", component: DetailsClientsComponent , canActivate:[AuthGuardGuard]},
  {path: "settings", component: SettingsComponent , canActivate:[AuthGuardGuard]},
  {path: "**", component: NotFindComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
