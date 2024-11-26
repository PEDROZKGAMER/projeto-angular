import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerocomediaComponent } from './generocomedia.component';

describe('GenerocomediaComponent', () => {
  let component: GenerocomediaComponent;
  let fixture: ComponentFixture<GenerocomediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerocomediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerocomediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
