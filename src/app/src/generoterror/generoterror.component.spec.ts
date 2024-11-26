import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroterrorComponent } from './generoterror.component';

describe('GeneroterrorComponent', () => {
  let component: GeneroterrorComponent;
  let fixture: ComponentFixture<GeneroterrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroterrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
