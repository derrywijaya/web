import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchNewsframingComponent } from './research-newsframing.component';

describe('ResearchNewsframingComponent', () => {
  let component: ResearchNewsframingComponent;
  let fixture: ComponentFixture<ResearchNewsframingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchNewsframingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchNewsframingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
