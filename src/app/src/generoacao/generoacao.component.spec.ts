import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroacaoComponent } from './generoacao.component';

describe('GeneroacaoComponent', () => {
  let component: GeneroacaoComponent;
  let fixture: ComponentFixture<GeneroacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
