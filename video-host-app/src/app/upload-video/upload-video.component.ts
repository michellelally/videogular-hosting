import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { VideoService } from '../services/video.service';



@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent implements OnInit {

  constructor(private vs: VideoService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.vs.createVideo(form.value);
    console.log(form.value);
    form.resetForm();
  }

}
