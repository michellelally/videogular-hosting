import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from  '@angular/material';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WatchVideoComponent } from './watch-video/watch-video.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VideosListComponent } from './videos-list/videos-list.component';

const appRoutes: Routes = [
  {
    path: 'watch',
    component: WatchVideoComponent
  },
  {
    path: 'upload',
    component: UploadVideoComponent
  }
  ,
  {
    path: 'list',
    component: VideosListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UploadVideoComponent,
    WatchVideoComponent,
    VideosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    VgCoreModule,
    VgControlsModule
    // MatTableModule       
  ],
  providers: [AngularFirestore, { provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
