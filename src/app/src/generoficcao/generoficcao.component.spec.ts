import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroficcaoComponent } from './generoficcao.component';

describe('GeneroficcaoComponent', () => {
  let component: GeneroficcaoComponent;
  let fixture: ComponentFixture<GeneroficcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroficcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroficcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
