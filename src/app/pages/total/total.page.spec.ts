import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalPage } from './total.page';

describe('TotalPage', () => {
  let component: TotalPage;
  let fixture: ComponentFixture<TotalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TotalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
