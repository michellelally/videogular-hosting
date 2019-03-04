import { TestBed } from '@angular/core/testing';

import { VideoService } from '../services/video.service';

describe('VideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoService = TestBed.get(VideoService);
    expect(service).toBeTruthy();
  });
});
