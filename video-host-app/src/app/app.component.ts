import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'video-host-app';

}
