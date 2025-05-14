import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { List } from '../../models/list.model';
import { ListService } from '../../services/list.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../services/token.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-lists',
  imports: [RouterLink, FormsModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {
  lists: List[] = [];
  editingListIndex: number | null = null;
  accessToken: string | null ='';
  user: User | null = null;


  constructor(
    private listService: ListService,
    private tokenService: TokenService,
    private userService: UserService
  ){}
  
  ngOnInit(): void {
    this.accessToken = this.tokenService.getToken();
    this.loadLists();
    this.getLoggedInUser();
  }

  getLoggedInUser(): void {
    this.userService.getProfile().subscribe({
      next: data => {
        this.user = data;
        // console.log(this.user._id)
      }, 
      error: (err: unknown) => {
        if(err instanceof Error) {
          console.error("Something went wrong when fetching lists", err);
        }
      }
    })
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
      this.editingListIndex = index;
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
          console.log(this.editingListIndex)
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
  cancelEdit(): void {
    this.editingListIndex = null;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.editingListIndex === null) return;

    const target = event.target as HTMLElement;
    const editing = target.closest(`#list-card-${this.editingListIndex}`);
    if (!editing) {
      this.cancelEdit();
    }
  }
}
