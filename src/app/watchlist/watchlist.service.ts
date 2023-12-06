import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Watchlist } from './watchlist';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  constructor(private http: HttpClient, private router: Router) {}
  add(payload: Watchlist) {
    console.log(payload);
    return this.http.post('http://localhost:3000/watchlist', payload);
  }
  get(): Observable<Watchlist[]> {
    let url = 'http://localhost:3000/watchlist?';
    return this.http.get<Watchlist[]>(url);
  }
  remove(id: number) {
    return this.http
      .delete(`http://localhost:3000/watchlist/${id}`)
      .subscribe(() => {
        this.router.navigate(['/watchlist']);
      });
  }
}
