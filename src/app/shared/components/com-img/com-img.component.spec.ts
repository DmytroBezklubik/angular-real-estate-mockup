import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComImgComponent } from './com-img.component';

describe('ComImgComponent', () => {
  let component: ComImgComponent;
  let fixture: ComponentFixture<ComImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
