import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomethreeScientistsComponent } from './homethree-scientists.component';

describe('HomethreeScientistsComponent', () => {
  let component: HomethreeScientistsComponent;
  let fixture: ComponentFixture<HomethreeScientistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomethreeScientistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomethreeScientistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
