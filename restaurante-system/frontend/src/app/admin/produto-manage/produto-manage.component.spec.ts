import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoManageComponent } from './produto-manage.component';

describe('ProdutoManage', () => {
  let component: ProdutoManageComponent;
  let fixture: ComponentFixture<ProdutoManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
