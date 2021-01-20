import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientsComponent } from './components/add-clients/add-clients.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { DetailsClientsComponent } from './components/details-clients/details-clients.component';
import { NavComponent } from './components/nav/nav.component';
import { SideComponent } from './components/side/side.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFindComponent } from './components/not-find/not-find.component';
import { ClientsService } from './services/clients.service';
import { AuthClientsService } from './services/auth-clients.service';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    AddClientsComponent,
    EditClientsComponent,
    DetailsClientsComponent,
    NavComponent,
    SideComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    NotFindComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ClientsService,
    AuthClientsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
