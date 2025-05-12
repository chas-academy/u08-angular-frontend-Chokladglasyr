import { HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
items: Item[] = [];
listId!: string;
listName!: string;
constructor(private route: ActivatedRoute, private itemService: ItemService){}

ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    this.listId = params.get('listid')!;
    console.log(this.listId)
    
  });
  this.loadItems();
}


loadItems(): void {
  this.itemService.getItems(this.listId).subscribe({
    next: data => {
      this.items.push(...data)
      console.log(data)
      this.listName = data[0].listName;
    },
    error: (err: unknown) => {
      if (err instanceof Error) {
        console.error("Something went wrong when fetching items", err)
      }
    }
  })
}
}
