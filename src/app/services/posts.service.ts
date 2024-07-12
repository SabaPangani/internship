import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Post } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private apiService: ApiService) {}

  getPosts = (url: string, params: any): Observable<Post[]> => {
    return this.apiService.get(url, params);
  };
}
