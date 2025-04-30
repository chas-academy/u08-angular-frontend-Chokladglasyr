import { Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { ItemsComponent } from './components/items/items.component';

export const routes: Routes = [
    {path: 'lists', component: ListsComponent},
    {path: 'items/:listid', component: ItemsComponent}
];
