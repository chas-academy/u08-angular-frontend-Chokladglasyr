import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { List } from '../../models/list.model';
import { ListService } from '../../services/list.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lists',
  imports: [RouterLink, FormsModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {
  lists: List[] = [];
  editingListIndex: number | null = null;
  
  
  constructor(private listService: ListService, private router: Router){}
  
  ngOnInit(): void {
    this.loadLists();
  }

  loadLists(): void {
    this.listService.getLists().subscribe({
      next: data => {
        this.lists.push(...data);
      }, 
      error: (err: unknown) => {
        if(err instanceof Error) {
          console.error("Something went wrong when fetching lists", err);
        }
      }
    })
  }
  
  deleteList(listId: string, userId: string, index: number): void {
    if(confirm("Sure you want to delete?")) {
      this.listService.deleteList(listId, userId).subscribe({
        next: () => {
          console.log("list deleted");
          this.lists.splice(index, 1);
        },
        error: (err: unknown) => {
          if(err instanceof Error) {
            console.error("Something went wrong", err);
            return;
          }
        }
      })

    }
  }

  editList(
    index: number
  ): void {
    try {
      this.editingListIndex = index;
    }catch (err: unknown) {
      if(err instanceof Error) {
        console.error("Something went wrong", err);
        return;
      }
    }
  }

  saveList(listId: string, userId: string, i:number): void {
    const list = this.lists[i]
        const updatedTitle = list.title.trim();
        const updatedDescription = list.description.trim();
        if (!updatedTitle || !updatedDescription) {
          alert("Title and description are required.");
          return;
        }
        this.listService.updateList(listId, userId, updatedTitle, updatedDescription, i).subscribe({
        next: () => {
          console.log("list updated");
          this.editingListIndex = null;
          window.location.reload();
        },
        error: (err: unknown) => {
          if(err instanceof Error) {
            console.error("Something went wrong", err);
            return;
          }
        }
  })
  }
}
