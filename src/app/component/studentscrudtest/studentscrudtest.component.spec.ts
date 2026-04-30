import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentscrudtestComponent } from './studentscrudtest.component';

describe('StudentscrudtestComponent', () => {
  let component: StudentscrudtestComponent;
  let fixture: ComponentFixture<StudentscrudtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentscrudtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentscrudtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
