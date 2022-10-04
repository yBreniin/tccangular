import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanComponent } from './woman.component';

describe('WomanComponent', () => {
  let component: WomanComponent;
  let fixture: ComponentFixture<WomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
