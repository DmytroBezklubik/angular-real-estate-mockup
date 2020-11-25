import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongdescComponent } from './longdesc.component';

describe('LongdescComponent', () => {
  let component: LongdescComponent;
  let fixture: ComponentFixture<LongdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
