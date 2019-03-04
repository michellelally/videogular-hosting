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

  videos: Video[];

  constructor(private vs: VideoService) { }

  ngOnInit() {
    this.vs.getVideos().subscribe(data => {
      this.videos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Video;
      })
    });
  }

  create(video: Video){
      this.vs.createVideo(video);
  }

  update(video: Video) {
    this.vs.updateVideo(video);
  }

  delete(id: string) {
    this.vs.deleteVideo(id);
  }
}
