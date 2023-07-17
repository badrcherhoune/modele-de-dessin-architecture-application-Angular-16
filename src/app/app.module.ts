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
import { ReactiveFormsModule } from '@angular/forms';
import { PagesError404Component } from './componants/composant/pages-error404/pages-error404.component';

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
    SpinnerComponent,
    PagesError404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
