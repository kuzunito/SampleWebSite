import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Movielist } from 'src/app/movielist/movielist';
import { MovielistService } from 'src/app/movielist/movielist.service';
import { Selectedmovie } from 'src/app/selectedmovie/selectedmovie/selectedmovie';
import { SelectedmovieComponent } from 'src/app/selectedmovie/selectedmovie/selectedmovie.component';
import { SelectedmovieService } from 'src/app/selectedmovie/selectedmovie/selectedmovie.service';
import { Watchlist } from 'src/app/watchlist/watchlist';
import { WatchlistService } from 'src/app/watchlist/watchlist.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  allMovies: Movielist[] = [];
  text = 'Add To WatchList';
  isVisited: boolean = true;
  status: boolean = true;

  sortingControl = new FormControl('');
  constructor(
    private movieListService: MovielistService,
    private watchListService: WatchlistService,
    private selectedListService: SelectedmovieService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getMovies('', '');
    this.sortingControl.valueChanges.subscribe((value) => {
      if (value) {
        this.doSorting(value);
      }
      console.log(value);
    });
  }
  doSorting(value: string) {
    let sortColumn: string = '';
    let order: string = '';
    if (value === 'title-asc') {
      sortColumn = 'title';
      order = 'asc';
    } else if (value === 'release-asc') {
      sortColumn = 'year';
      order = 'asc';
    } else {
      sortColumn = 'id';
      order = 'asc';
    }
    this.getMovies(sortColumn, order);
  }
  custom_sort(
    a: { release: string | number | Date },
    b: { release: string | number | Date }
  ) {
    return new Date(a.release).getTime() - new Date(b.release).getTime();
  }
  sortByName() {
    this.allMovies = this.allMovies.sort((a, b) => b.id - a.id);
    console.log('tangina');
  }
  getMovies(sortColum: string, order: string) {
    this.movieListService.get(sortColum, order).subscribe((data) => {
      this.allMovies = data;
      // console.log(data);
    });
  }
  addToWatchList(movie: any) {
    this.watchListService.add(movie as Watchlist).subscribe(() => {});
    if (movie == this.allMovies) {
      console.log(this.allMovies);
    }
  }
  clickMovie(movie: any) {
    this.selectedListService.add(movie as Selectedmovie).subscribe(() => {});
    this.router.navigate(['/moviedetails']);
  }
}
