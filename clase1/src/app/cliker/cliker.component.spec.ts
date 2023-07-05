import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClikerComponent } from './cliker.component';

describe('ClikerComponent', () => {
  let component: ClikerComponent;
  let fixture: ComponentFixture<ClikerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClikerComponent]
    });
    fixture = TestBed.createComponent(ClikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
