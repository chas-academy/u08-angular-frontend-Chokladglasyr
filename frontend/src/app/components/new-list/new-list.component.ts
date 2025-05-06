import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { List } from '../../models/list.model';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-new-list',
  imports: [ReactiveFormsModule],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})
export class NewListComponent{
  lists: List[] = [];
  newListForm: FormGroup;

  constructor(private listService: ListService, private fb: FormBuilder) {
    this.newListForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if(this.newListForm.invalid) return;
    const newList: Omit<List, 'id'> = {
      ...this.newListForm.value,
    };
    this.listService.addList(newList).subscribe({
      next: (createdList: List) => {
        this.lists.unshift(createdList);
        this.newListForm.reset();
      },
      error: (err: unknown) => {
        if(err instanceof Error) {
          console.error("Something went wrong when adding new list", err);
        }
      }
    })
  }
}
