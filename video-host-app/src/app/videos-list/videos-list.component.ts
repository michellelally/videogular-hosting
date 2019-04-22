import { Component, OnInit } from '@angular/core';
import { Video } from '../video.model'
import { VideoService } from '../services/video.service'

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {

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
