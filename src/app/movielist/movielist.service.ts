import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movielist } from './movielist';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class MovielistService {
  constructor(private http: HttpClient, private router: Router) {}

  get(sortColumn: string, order: string): Observable<Movielist[]> {
    let url = 'http://localhost:3000/movies?';
    if (sortColumn && order) {
      url = `${url}_sort=${sortColumn}&_order=${order}`;
    }
    return this.http.get<Movielist[]>(url);
  }
  goTo(id: number) {
    return this.http
      .get(`http://localhost:3000/movies/${id}`)
      .subscribe(() => {});
  }
}
