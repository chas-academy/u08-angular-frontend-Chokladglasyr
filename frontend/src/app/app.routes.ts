import { Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { ItemsComponent } from './components/items/items.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'lists', component: ListsComponent},
    {path: 'items/:listid', component: ItemsComponent}
];
