import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerCardComponent } from './hamburguer-card.component';

describe('HamburguerCardComponent', () => {
  let component: HamburguerCardComponent;
  let fixture: ComponentFixture<HamburguerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburguerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburguerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
