import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByUserComponent } from './search-by-user.component';

describe('SearchByUserComponent', () => {
  let component: SearchByUserComponent;
  let fixture: ComponentFixture<SearchByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByUserComponent]
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
