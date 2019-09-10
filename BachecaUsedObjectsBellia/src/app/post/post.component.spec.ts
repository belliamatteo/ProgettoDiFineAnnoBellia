import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTelefoniaComponent } from './view-telefonia.component';

describe('ViewTelefoniaComponent', () => {
  let component: ViewTelefoniaComponent;
  let fixture: ComponentFixture<ViewTelefoniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTelefoniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTelefoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
