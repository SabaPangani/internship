import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Post } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private apiService: ApiService) {}

  getTodos = (url: string, params: any): Observable<Post[]> => {
    return this.apiService.get(url, params);
  };
}
