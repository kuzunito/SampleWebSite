import { Component, OnInit } from '@angular/core';
import { Watchlist } from '../watchlist';
import { Router } from '@angular/router';

import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent implements OnInit {
  watchList: Watchlist[] = [];
  status: [];
  constructor(
    private watchListService: WatchlistService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getWatchList();
  }

  getWatchList() {
    this.watchListService.get().subscribe((data) => {
      this.watchList = data;
      console.log(this.watchList);
    });
  }
  removeToWatchList(id: number) {
    this.watchListService.remove(id);
    window.location.reload();
  }
}
