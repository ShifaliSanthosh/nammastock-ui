import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditiyComponent } from './commoditiy.component';

describe('CommoditiyComponent', () => {
  let component: CommoditiyComponent;
  let fixture: ComponentFixture<CommoditiyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommoditiyComponent]
    });
    fixture = TestBed.createComponent(CommoditiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
