import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { List } from '../../models/list.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { ListService } from '../../services/list.service';
import { SearchService } from '../../services/search.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-by-user',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './search-by-user.component.html',
  styleUrl: './search-by-user.component.css'
})
export class SearchByUserComponent {
  lists: List[] = [];
  error: string = '';
  searchForm: FormGroup;

  @ViewChild('listContainer') listContainer!: ElementRef;
  
  constructor(private listService: ListService, private fb: FormBuilder, private searchService: SearchService){
    this.searchForm = this.fb.group({
      username: ['', Validators.required]
    })
    
  }
  
  onSubmit(): void {

    if(this.searchForm.invalid) return;
    const searchUser: string = this.searchForm.value.username.trim()
    this.searchService.getListsByUsername(searchUser).subscribe({
      next: data => {
        if(typeof data !== "string") {

          this.lists = data;

        } 

      },
      error: (err: unknown) => {
        if(err instanceof Error) {
          this.error = err.message
          console.error("Something went wrong", err)
        }
      }
    })
  }
}
