import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { LoginComponent } from './pages/login-form/login-form.component';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { MydashboardComponent } from './pages/mydashboard/mydashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MydashboardComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    AppRoutingModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
