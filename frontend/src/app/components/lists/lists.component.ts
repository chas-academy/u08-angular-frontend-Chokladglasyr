import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../models/list.model';
import { ListService } from '../../services/list.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lists',
  imports: [RouterLink],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {
  lists: List[] = [];

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
    id: string,
    title: string,
    description: string,
    userId: string,
    index: number
  ): void {
    try {

      const newTextContainer = document.createElement('div')
      newTextContainer.setAttribute("class","list-text")
      const newTitle = newTextContainer.appendChild(document.createElement("input"));
      const newDescription = newTextContainer.appendChild(document.createElement("input"));
      Object.assign(newTitle, {
        value: `${title}`,
        id: "title",
      });
      Object.assign(newDescription, {
        value: `${description}`,
        id: "description",
      });
      const listCard = document.getElementById(`list-card-${index}`);
      listCard?.replaceChild(newTextContainer,listCard.childNodes[0] )

      const editBtn = document.getElementById(`edit-list-${index}`)
      const saveBtn = document.createElement('button');
      Object.assign(saveBtn, {
        className: 'btn-green',
        type: 'submit'
      })
      saveBtn.innerText = "Save";
      saveBtn.addEventListener("click", this.listService.updateList);
      editBtn?.replaceWith(saveBtn)

      


    }catch (err: unknown) {
      if(err instanceof Error) {
        console.error("Something went wrong", err);
        return;
      }
    }
  }
}
