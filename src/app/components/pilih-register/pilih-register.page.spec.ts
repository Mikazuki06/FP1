import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilihRegisterPage } from './pilih-register.page';

describe('PilihRegisterPage', () => {
  let component: PilihRegisterPage;
  let fixture: ComponentFixture<PilihRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PilihRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
