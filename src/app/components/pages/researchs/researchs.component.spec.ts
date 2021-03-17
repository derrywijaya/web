import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchsComponent } from './researchs.component';

describe('ResearchsComponent', () => {
  let component: ResearchsComponent;
  let fixture: ComponentFixture<ResearchsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
