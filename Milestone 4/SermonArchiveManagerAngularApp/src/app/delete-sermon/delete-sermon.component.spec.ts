import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSermonComponent } from './delete-sermon.component';

describe('DeleteSermonComponent', () => {
  let component: DeleteSermonComponent;
  let fixture: ComponentFixture<DeleteSermonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSermonComponent]
    });
    fixture = TestBed.createComponent(DeleteSermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
