import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaComponent } from './usa.component';

describe('UsaComponent', () => {
  let component: UsaComponent;
  let fixture: ComponentFixture<UsaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsaComponent]
    });
    fixture = TestBed.createComponent(UsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
