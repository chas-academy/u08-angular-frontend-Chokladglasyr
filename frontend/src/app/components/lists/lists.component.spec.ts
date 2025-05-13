import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsComponent } from './lists.component';
import { DebugElement } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('ListsComponent', () => {
  let component: ListsComponent;
  let fixture: ComponentFixture<ListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list container for all list cards', () => {
    const listsDe: DebugElement = fixture.debugElement;
    const listsEl: HTMLElement = listsDe.nativeElement;
    const container = listsEl.querySelector('#list-container')
    expect(container).toBeTruthy();
  })

});
