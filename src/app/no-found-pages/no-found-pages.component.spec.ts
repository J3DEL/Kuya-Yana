import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoundPagesComponent } from './no-found-pages.component';

describe('NoFoundPagesComponent', () => {
  let component: NoFoundPagesComponent;
  let fixture: ComponentFixture<NoFoundPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoFoundPagesComponent]
    });
    fixture = TestBed.createComponent(NoFoundPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
