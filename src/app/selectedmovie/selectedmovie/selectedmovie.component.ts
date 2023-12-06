import { Component, OnInit } from '@angular/core';
import { Movielist } from 'src/app/movielist/movielist';
import { Selectedmovie } from './selectedmovie';
import { SelectedmovieService } from './selectedmovie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectedmovie',
  templateUrl: './selectedmovie.component.html',
  styleUrls: ['./selectedmovie.component.scss'],
})
export class SelectedmovieComponent implements OnInit {
  [x: string]: any;
  selectedMovie: Selectedmovie[] = [];
  ngOnInit(): void {
    this.getWatchList();
  }
  constructor(
    private selectedMovieService: SelectedmovieService,
    private router: Router
  ) {}

  getWatchList() {
    this.selectedMovieService.get().subscribe((data) => {
      this.selectedMovie = data;
      console.log(this.selectedMovie);
    });
  }

  goBack(id: any) {
    this.selectedMovieService.remove(id);
    this.router.navigate(['/']);
  }
}
