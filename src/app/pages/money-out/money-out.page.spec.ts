import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoneyOutPage } from './money-out.page';

describe('MoneyOutPage', () => {
  let component: MoneyOutPage;
  let fixture: ComponentFixture<MoneyOutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoneyOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
