import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSermonComponent } from './create-sermon.component';

describe('CreateSermonComponent', () => {
  let component: CreateSermonComponent;
  let fixture: ComponentFixture<CreateSermonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSermonComponent]
    });
    fixture = TestBed.createComponent(CreateSermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
