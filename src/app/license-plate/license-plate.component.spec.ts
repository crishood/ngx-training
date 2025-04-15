import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateComponent } from './license-plate.component';
import {CALIFORNIA_PLATE} from '../mock-data';
import {By} from '@angular/platform-browser';

fdescribe('LicensePlateComponent', () => {
  let component: LicensePlateComponent;
  let fixture: ComponentFixture<LicensePlateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ LicensePlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensePlateComponent);
    component = fixture.componentInstance;
    component.plate = CALIFORNIA_PLATE;
    component.buttonText = 'Add to cart';
    // fixture.componentRef.setInput("plate", CALIFORNIA_PLATE);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right license plate title', () => {
    const titleElt = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(titleElt.innerText).toBe("2013 California My Tahoe license plate");
  });

  it('should display the right button text', () => {
    const buttonElt = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElt.innerText).toContain("Add to cart");
  });
});
