import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllClientComponent } from './view-all-client.component';

describe('ViewAllClientComponent', () => {
  let component: ViewAllClientComponent;
  let fixture: ComponentFixture<ViewAllClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
