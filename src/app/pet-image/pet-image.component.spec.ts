import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetImageComponent } from './pet-image.component';

describe('PetImageComponent', () => {
  let component: PetImageComponent;
  let fixture: ComponentFixture<PetImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
