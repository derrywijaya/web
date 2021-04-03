import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsResearchWorkshopComponent } from './cs-research-workshop.component';

describe('CsResearchWorkshopComponent', () => {
  let component: CsResearchWorkshopComponent;
  let fixture: ComponentFixture<CsResearchWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsResearchWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsResearchWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
