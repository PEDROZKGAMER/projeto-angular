import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroromanceComponent } from './generoromance.component';

describe('GeneroromanceComponent', () => {
  let component: GeneroromanceComponent;
  let fixture: ComponentFixture<GeneroromanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroromanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroromanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
