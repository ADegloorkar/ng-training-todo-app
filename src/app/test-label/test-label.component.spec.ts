import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLabelComponent } from './test-label.component';

describe('TestLabelComponent', () => {
  let component: TestLabelComponent;
  let fixture: ComponentFixture<TestLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
