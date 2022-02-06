import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Protected.ViewComponent } from './protected.component';

describe('Protected.ViewComponent', () => {
  let component: Protected.ViewComponent;
  let fixture: ComponentFixture<Protected.ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Protected.ViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Protected.ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
