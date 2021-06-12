import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTarragonaComponent } from './why-tarragona.component';

describe('WhyTarragonaComponent', () => {
  let component: WhyTarragonaComponent;
  let fixture: ComponentFixture<WhyTarragonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyTarragonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyTarragonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
