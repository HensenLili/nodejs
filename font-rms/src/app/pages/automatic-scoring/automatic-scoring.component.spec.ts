import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticScoringComponent } from './automatic-scoring.component';

describe('AutomaticScoringComponent', () => {
  let component: AutomaticScoringComponent;
  let fixture: ComponentFixture<AutomaticScoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomaticScoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
