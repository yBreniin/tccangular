import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MansComponent } from './mans.component';

describe('MansComponent', () => {
  let component: MansComponent;
  let fixture: ComponentFixture<MansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
