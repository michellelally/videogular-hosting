import { Component, OnInit } from '@angular/core';
import { Video } from '../video.model'
import { VideoService } from 'src/app/services/video.service';


@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.scss']
})
export class WatchVideoComponent implements OnInit {

  playlist: Video[];
  currentIndex: number;
  currentItem: Video;

  constructor(private vs: VideoService) { }

  ngOnInit() {
    this.vs.getVideos().subscribe(data => {
      this.playlist = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Video;
      })
    });
    this.currentIndex = 0;
    this.currentItem = this.playlist[this.currentIndex];
  }



  onClickPlaylistItem(item: Video, index:number) {
    this.currentIndex = index;
    this.currentItem = item;
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

/*
  playlist: Array<Video> = [
    {
      id: 'sdfkj',
      title: 'Glue',
      src: '../../assets/videoplayback.mp4',
      type: 'video/mp4'
    },
    {
      id: 'sdfkdfgj',
      title: 'Big Buck Bunny',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      id: 'sdfkjdsf',
      title: 'Elephants Dream',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];
*/



}
