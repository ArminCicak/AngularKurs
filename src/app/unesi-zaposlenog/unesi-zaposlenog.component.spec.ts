import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnesiZaposlenogComponent } from './unesi-zaposlenog.component';

describe('UnesiZaposlenogComponent', () => {
  let component: UnesiZaposlenogComponent;
  let fixture: ComponentFixture<UnesiZaposlenogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnesiZaposlenogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnesiZaposlenogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
