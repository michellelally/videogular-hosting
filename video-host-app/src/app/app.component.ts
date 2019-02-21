import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
<<<<<<< HEAD
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Item { url: string; }
=======
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
>>>>>>> aef14e8c0510641b181805c90dbd749ac152ee53

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
<<<<<<< HEAD



uploadPercent: Observable<number>;
downloadURL: Observable<string>;
items: Observable<Item[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;

constructor(private storage: AngularFireStorage, db: AngularFirestore) {
  this.itemsCollection = db.collection<Item>('uploads');
  this.items = this.itemsCollection.valueChanges();
}

addItem(item: Item) {
  this.itemsCollection.add(item);
}

uploadFile(event) {
  const file = event.target.files[0];
  const filePath = '';
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file);

  // observe percentage changes
  this.uploadPercent = task.percentageChanges();
  // get notified when the download URL is available
  task.snapshotChanges().pipe(
    finalize(() => this.downloadURL = fileRef.getDownloadURL())
  )
    .subscribe()
}
=======
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  constructor(private storage: AngularFireStorage) {}
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = './uploads/';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }
>>>>>>> aef14e8c0510641b181805c90dbd749ac152ee53
}
