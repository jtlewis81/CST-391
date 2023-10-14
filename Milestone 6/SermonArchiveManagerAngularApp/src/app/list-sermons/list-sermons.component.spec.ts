import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSermonsComponent } from './list-sermons.component';

describe('ListSermonsComponent', () => {
  let component: ListSermonsComponent;
  let fixture: ComponentFixture<ListSermonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSermonsComponent]
    });
    fixture = TestBed.createComponent(ListSermonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
