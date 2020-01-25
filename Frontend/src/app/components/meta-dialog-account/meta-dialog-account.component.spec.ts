import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDialogAccountComponent } from './meta-dialog-account.component';

describe('MetaDialogAccountComponent', () => {
  let component: MetaDialogAccountComponent;
  let fixture: ComponentFixture<MetaDialogAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaDialogAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDialogAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
