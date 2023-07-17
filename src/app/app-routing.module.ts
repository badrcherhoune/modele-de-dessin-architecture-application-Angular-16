import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componants/user/login/login.component';
import { DashboardComponent } from './componants/dashboard/dashboard.component';
import { authGuard } from './shared/guard/auth.guard';
import { RegisterComponent } from './componants/user/register/register.component';

const routes: Routes = [
  {path: "" , component: LoginComponent},
  {path: "login" , component: LoginComponent},
  {path: "register" , component: RegisterComponent},
  {path: "dashboar" , component: DashboardComponent,canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
