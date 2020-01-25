import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDialogGroupComponent } from './meta-dialog-group.component';

describe('MetaDialogGroupComponent', () => {
  let component: MetaDialogGroupComponent;
  let fixture: ComponentFixture<MetaDialogGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaDialogGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDialogGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
