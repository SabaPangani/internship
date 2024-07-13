import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: UserPostsComponent },
  { path: 'todos/:id', component: TodoListComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component: PageNotfoundComponent },
];
