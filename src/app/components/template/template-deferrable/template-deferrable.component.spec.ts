import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeferrableComponent } from './template-deferrable.component';

describe('TemplateDeferrableComponent', () => {
  let component: TemplateDeferrableComponent;
  let fixture: ComponentFixture<TemplateDeferrableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDeferrableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDeferrableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
