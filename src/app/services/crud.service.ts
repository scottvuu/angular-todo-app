import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class CrudService<T> {
  baseUrl: string;
  constructor(
    protected httpClient: HttpClient,
    @Inject(String) actionUrl: string
  ) {
    this.baseUrl = `https://jsonplaceholder.typicode.com/${actionUrl}`;
  }

  get(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.baseUrl, {
      params: { _limit: 20 },
    });
  }
  add(data: T): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl, data);
  }
  delete(id: string | number): Observable<T> {
    return this.httpClient.delete<T>(`${this.baseUrl}/${id}`);
  }
  edit(id: string | number, data: Partial<T>): Observable<T> {
    return this.httpClient.patch<T>(`${this.baseUrl}/${id}`, data);
  }
}
