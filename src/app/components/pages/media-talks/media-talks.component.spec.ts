import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTalksComponent } from './media-talks.component';

describe('MediaTalksComponent', () => {
  let component: MediaTalksComponent;
  let fixture: ComponentFixture<MediaTalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaTalksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
