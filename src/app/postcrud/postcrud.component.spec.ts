import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcrudComponent } from './postcrud.component';

describe('PostcrudComponent', () => {
  let component: PostcrudComponent;
  let fixture: ComponentFixture<PostcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
