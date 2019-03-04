import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Video } from 'src/app/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private firestore: AngularFirestore) { }

  getVideos() {
    return this.firestore.collection('videos').snapshotChanges();
  }

  createVideo(video: Video) {
    return this.firestore.collection('videos').add(video);
  }

  updateVideo(video: Video) {
    delete video.id;
    this.firestore.doc('videos/' + video.id).update(video);
  }

  deleteVideo(videoID: string) {
    this.firestore.doc('videos/' + videoID).delete();
  }
}
