import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './componants/dashboard/dashboard.component';
import { HeaderComponent } from './componants/dashboard/header/header.component';
import { SubmenuComponent } from './componants/dashboard/submenu/submenu.component';
import { LoginComponent } from './componants/user/login/login.component';
import { RegisterComponent } from './componants/user/register/register.component';
import { MainComponent } from './componants/main/main.component';
import { FooterComponent } from './componants/composant/footer/footer.component';
import { SpinnerComponent } from './componants/composant/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SubmenuComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
