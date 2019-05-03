import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HistoriaComponent } from './historia/historia.component';
import { CotizaComponent } from './cotiza/cotiza.component';
import { HomeComponent } from './home/home.component';
import { FolioComponent } from './folio/folio.component';
import { AuthenticationService} from './services/authentication.service';

import { FormsModule } from '@angular/forms';

import {Catalogostatus} from './folio/catalogostatus';

export const firebaseConfig ={
  apiKey: 'AIzaSyBDM7seVAPJqkZ8CPGJHhYf3kk4TBVc9PI',
  authDomain: 'eltallerdenolan.firebaseapp.com',
  databaseURL: 'https://eltallerdenolan.firebaseio.com',
  projectId: 'eltallerdenolan',
  storageBucket: 'eltallerdenolan.appspot.com',
  messagingSenderId: '84358946794'
}

const appRoutes : Routes =[
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'cotiza',component:CotizaComponent},
  {path: 'historia',component:HistoriaComponent},
  {path: 'folio',component:FolioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HistoriaComponent,
    CotizaComponent,
    HomeComponent,
    FolioComponent,
    Catalogostatus
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
