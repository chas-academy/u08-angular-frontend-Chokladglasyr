import { Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { ItemsComponent } from './components/items/items.component';
import { HomeComponent } from './components/home/home.component';
import { SearchByUserComponent } from './components/search-by-user/search-by-user.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';
import { NewListComponent } from './components/new-list/new-list.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'lists', component: ListsComponent},
    {path: 'items/:listid', component: ItemsComponent},
    {path: 'search', component: SearchByUserComponent},
    {path: 'searchprice', component: SearchItemsComponent},
    {path: 'new-list', component: NewListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'edit-user', component: EditUserComponent},
    {path: 'register', component: RegisterComponent}
];
