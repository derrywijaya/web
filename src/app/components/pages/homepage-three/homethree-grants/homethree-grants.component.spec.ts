import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomethreeGrantsComponent } from './homethree-grants.component';

describe('HomethreeGrantsComponent', () => {
  let component: HomethreeGrantsComponent;
  let fixture: ComponentFixture<HomethreeGrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomethreeGrantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomethreeGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
