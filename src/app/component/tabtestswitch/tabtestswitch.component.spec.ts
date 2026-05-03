import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabtestswitchComponent } from './tabtestswitch.component';

describe('TabtestswitchComponent', () => {
  let component: TabtestswitchComponent;
  let fixture: ComponentFixture<TabtestswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabtestswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabtestswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
