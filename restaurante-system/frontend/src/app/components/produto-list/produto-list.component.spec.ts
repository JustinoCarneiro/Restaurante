import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListComponent } from './produto-list.component';

describe('ProdutoListComponent', () => {
  let component: ProdutoListComponent; // 3. CORREÇÃO: A variável é do tipo correto
  let fixture: ComponentFixture<ProdutoListComponent>; // 4. CORREÇÃO: O "fixture" também é do tipo correto

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});