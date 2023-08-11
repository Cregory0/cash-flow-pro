import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoneyInPage } from './money-in.page';

describe('MoneyInPage', () => {
  let component: MoneyInPage;
  let fixture: ComponentFixture<MoneyInPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoneyInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
