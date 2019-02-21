import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Item { url: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {



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
}
