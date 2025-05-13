import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListComponent } from './new-list.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('NewListComponent', () => {
  let component: NewListComponent;
  let fixture: ComponentFixture<NewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewListComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
