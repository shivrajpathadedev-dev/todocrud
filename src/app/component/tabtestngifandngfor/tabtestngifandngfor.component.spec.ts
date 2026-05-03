import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabtestngifandngforComponent } from './tabtestngifandngfor.component';

describe('TabtestngifandngforComponent', () => {
  let component: TabtestngifandngforComponent;
  let fixture: ComponentFixture<TabtestngifandngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabtestngifandngforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabtestngifandngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
