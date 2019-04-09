import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Video } from 'src/app/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  constructor(private firestore: AngularFirestore) { }

  id: string;

  getVideos() {
    return this.firestore.collection('videos').snapshotChanges();
  }

  createVideo(video: Video) {
    this.id = String(Date.now().toPrecision);
    return this.firestore.collection('videos').doc(this.id).set(video);
  }

  updateVideo(video: Video) {
    delete video.id;
    this.firestore.doc('videos/' + video.id).update(video);
  }

  deleteVideo(videoID: string) {
    this.firestore.doc('videos/' + videoID).delete();
  }
}
