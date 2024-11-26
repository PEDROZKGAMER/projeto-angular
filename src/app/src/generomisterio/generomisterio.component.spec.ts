import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneromisterioComponent } from './generomisterio.component';

describe('GeneromisterioComponent', () => {
  let component: GeneromisterioComponent;
  let fixture: ComponentFixture<GeneromisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneromisterioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneromisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
