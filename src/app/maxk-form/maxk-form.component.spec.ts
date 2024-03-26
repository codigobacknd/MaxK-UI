import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxkFormComponent } from './maxk-form.component';

describe('MaxkFormComponent', () => {
  let component: MaxkFormComponent;
  let fixture: ComponentFixture<MaxkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxkFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
