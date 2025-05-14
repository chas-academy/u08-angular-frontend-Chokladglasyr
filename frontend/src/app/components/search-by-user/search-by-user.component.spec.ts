import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByUserComponent } from './search-by-user.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SearchByUserComponent', () => {
  let component: SearchByUserComponent;
  let fixture: ComponentFixture<SearchByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByUserComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
