import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedAreaComponent } from './restrictedArea.component';

describe('CatalogComponent', () => {
  let component: RestrictedAreaComponent;
  let fixture: ComponentFixture<RestrictedAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
