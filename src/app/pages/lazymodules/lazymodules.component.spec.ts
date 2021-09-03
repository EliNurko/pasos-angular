import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazymodulesComponent } from './lazymodules.component';

describe('LazymodulesComponent', () => {
  let component: LazymodulesComponent;
  let fixture: ComponentFixture<LazymodulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazymodulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazymodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
