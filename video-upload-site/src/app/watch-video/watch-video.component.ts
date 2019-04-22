import { Component, OnInit } from '@angular/core';

export interface Video {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.scss']
})

export class WatchVideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  playlist: Array<Video> = [
    {
      title: 'Glue',
      src: '../../assets/videoplayback.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Big Buck Bunny',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      title: 'Elephants Dream',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];

  currentIndex = 0;
  currentItem: Video = this.playlist[this.currentIndex];

  onClickPlaylistItem(item: Video, index:number) {
    this.currentIndex = index;
    this.currentItem = item;
  }

}
