import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { WatchVideoComponent } from './watch-video/watch-video.component';

const appRoutes: Routes = [
  {
    path: 'watch',
    component: WatchVideoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WatchVideoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
