import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  constructor(private af: AngularFireModule, ) { }
}
