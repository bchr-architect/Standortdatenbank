import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInGroupComponent } from './list-in-group.component';

describe('ListInGroupComponent', () => {
  let component: ListInGroupComponent;
  let fixture: ComponentFixture<ListInGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
