import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesError404Component } from './pages-error404.component';

describe('PagesError404Component', () => {
  let component: PagesError404Component;
  let fixture: ComponentFixture<PagesError404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesError404Component]
    });
    fixture = TestBed.createComponent(PagesError404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
