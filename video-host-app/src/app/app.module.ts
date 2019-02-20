import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

export const firebaseCongig = {
  apiKey: "AIzaSyAfzxsONF5agbyZwL5ziKye5YCsy7gQ2Zk",
  authDomain: "ppit-436ab.firebaseapp.com",
  databaseURL: "https://ppit-436ab.firebaseio.com",
  projectId: "ppit-436ab",
  storageBucket: "ppit-436ab.appspot.com",
  messagingSenderId: "1065215763712"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [
    { provide: StorageBucket, useValue: 'bucket' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
