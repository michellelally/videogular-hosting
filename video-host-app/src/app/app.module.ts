import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
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
<<<<<<< HEAD
    AngularFirestoreModule, 
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    { provide: StorageBucket, useValue: 'bucket' }
=======
    AngularFireStorageModule
  ],
  providers: [
    { provide: StorageBucket, useValue: 'ppit-436ab.appspot.com' }
>>>>>>> aef14e8c0510641b181805c90dbd749ac152ee53
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
