import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PickUpComponent } from './pickup/pickup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrackComponent } from './track/track.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path  :'home',component:HomeComponent},
  {path  :'service',component:ServiceComponent},
  {path  :'about',component:AboutComponent},
  {path  :'contact',component:ContactComponent},
  {path  :'pickup',component:PickUpComponent},
  {path  :'login',component:LoginComponent},
  {path  :'track',component:TrackComponent},
  {path  :'dashboard',component:DashboardComponent,canActivate:[AdminGuard]},
  {path  :'updateform/:trackId',component:UpdateformComponent},
  {path : '',redirectTo : 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
