import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderEjemploComponent } from './render-ejemplo.component';

describe('RenderEjemploComponent', () => {
  let component: RenderEjemploComponent;
  let fixture: ComponentFixture<RenderEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
