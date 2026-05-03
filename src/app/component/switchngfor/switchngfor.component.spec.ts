import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchngforComponent } from './switchngfor.component';

describe('SwitchngforComponent', () => {
  let component: SwitchngforComponent;
  let fixture: ComponentFixture<SwitchngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchngforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
