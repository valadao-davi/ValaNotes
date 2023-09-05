import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasCriadasComponent } from './notas-criadas.component';

describe('NotasCriadasComponent', () => {
  let component: NotasCriadasComponent;
  let fixture: ComponentFixture<NotasCriadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotasCriadasComponent]
    });
    fixture = TestBed.createComponent(NotasCriadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
