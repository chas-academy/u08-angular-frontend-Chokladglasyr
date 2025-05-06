import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list.model';
import { ListService } from '../../services/list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lists',
  imports: [RouterLink],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {
  lists: List[] = [];

  constructor(private listService: ListService){}

  ngOnInit(): void {
    this.loadLists();
  }

  loadLists(): void {
    this.listService.getLists().subscribe({
      next: data => {
        this.lists.push(...data)
        // console.log(data)
      },
      error: (err: unknown) => {
        if(err instanceof Error) {
          console.error("Something went wrong when fetching lists", err);
        }
      }
    })
  }
}
