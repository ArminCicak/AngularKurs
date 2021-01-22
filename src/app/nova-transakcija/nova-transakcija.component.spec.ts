import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTransakcijaComponent } from './nova-transakcija.component';

describe('NovaTransakcijaComponent', () => {
  let component: NovaTransakcijaComponent;
  let fixture: ComponentFixture<NovaTransakcijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaTransakcijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTransakcijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
