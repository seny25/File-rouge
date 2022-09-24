import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduitclearComponent } from './create-produitclear.component';

describe('CreateProduitclearComponent', () => {
  let component: CreateProduitclearComponent;
  let fixture: ComponentFixture<CreateProduitclearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProduitclearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProduitclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
