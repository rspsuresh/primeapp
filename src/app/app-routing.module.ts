import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
//import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { MydashboardComponent } from './pages/mydashboard/mydashboard.component';

const routes: Routes = [
  {
    path: 'display-data',
    component: DisplayDataComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'my',
    component: MydashboardComponent
  },
 {
    path: 'login-form',
   component: LoginFormComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent,LoginFormComponent]
})
export class AppRoutingModule { }
