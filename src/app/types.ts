import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe: 'events';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface User {
  id: number;
  name: string;
  lastName: string;
  phone: number;
  email: string;
  company: { name: string };
  posts: Post[];
}
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed?: boolean;
}
