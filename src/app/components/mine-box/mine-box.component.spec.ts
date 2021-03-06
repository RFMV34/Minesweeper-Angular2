import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineBoxComponent } from './mine-box.component';

describe('MineBoxComponent', () => {
  let component: MineBoxComponent;
  let fixture: ComponentFixture<MineBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
