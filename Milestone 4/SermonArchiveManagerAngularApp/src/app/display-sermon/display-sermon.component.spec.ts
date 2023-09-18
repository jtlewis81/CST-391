import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySermonComponent } from './display-sermon.component';

describe('DisplaySermonComponent', () => {
  let component: DisplaySermonComponent;
  let fixture: ComponentFixture<DisplaySermonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySermonComponent]
    });
    fixture = TestBed.createComponent(DisplaySermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
