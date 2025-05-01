import { Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { ItemsComponent } from './components/items/items.component';
import { HomeComponent } from './components/home/home.component';
import { SearchByUserComponent } from './components/search-by-user/search-by-user.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'lists', component: ListsComponent},
    {path: 'items/:listid', component: ItemsComponent},
    {path: 'search', component: SearchByUserComponent},
    {path: 'searchprice', component: SearchItemsComponent}
];
