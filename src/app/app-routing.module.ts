import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './movielist/movielist/movielist.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails/moviedetails.component';
import { MainpageComponent } from './mainpage/mainpage/MainpageComponent';
import { WatchlistComponent } from './watchlist/watchlist/watchlist.component';
import { SelectedmovieComponent } from './selectedmovie/selectedmovie/selectedmovie.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'watchlist',
    component: WatchlistComponent,
  },
  {
    path: 'moviedetails',
    component: SelectedmovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
