import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PickUpComponent } from './pickup/pickup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TrackComponent } from './track/track.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { UpdateformComponent } from './updateform/updateform.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    TrackComponent,
    PickUpComponent,
    UpdateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
