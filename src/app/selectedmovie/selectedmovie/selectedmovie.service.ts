import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Watchlist } from 'src/app/watchlist/watchlist';
import { Selectedmovie } from './selectedmovie';

@Injectable({
  providedIn: 'root',
})
export class SelectedmovieService {
  constructor(private http: HttpClient, private router: Router) {}

  add(payload: Selectedmovie) {
    console.log(payload);
    return this.http.post('http://localhost:3000/selectedmovie', payload);
  }
  get(): Observable<Selectedmovie[]> {
    let url = 'http://localhost:3000/selectedmovie?';
    return this.http.get<Selectedmovie[]>(url);
  }
  remove(id: number) {
    return this.http
      .delete(`http://localhost:3000/selectedmovie/${id}`)
      .subscribe(() => {
        // this.router.navigate(['/selectedmovie']);
      });
  }
}
