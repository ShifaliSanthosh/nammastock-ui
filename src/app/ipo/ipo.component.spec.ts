import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoComponent } from './ipo.component';

describe('IpoComponent', () => {
  let component: IpoComponent;
  let fixture: ComponentFixture<IpoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpoComponent]
    });
    fixture = TestBed.createComponent(IpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
