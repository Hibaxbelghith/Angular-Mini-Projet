import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponenComponent } from './contact-componen.component';

describe('ContactComponenComponent', () => {
  let component: ContactComponenComponent;
  let fixture: ComponentFixture<ContactComponenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponenComponent]
    });
    fixture = TestBed.createComponent(ContactComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
