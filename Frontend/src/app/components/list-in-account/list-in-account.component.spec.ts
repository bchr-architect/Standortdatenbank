import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInAccountComponent } from './list-in-account.component';

describe('ListInAccountComponent', () => {
  let component: ListInAccountComponent;
  let fixture: ComponentFixture<ListInAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
