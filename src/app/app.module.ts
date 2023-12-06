import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SortByOrderPipe } from './sort-by-order.pipe';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage/MainpageComponent';
import { MoviedetailsComponent } from './moviedetails/moviedetails/moviedetails.component';
import { WatchlistComponent } from './watchlist/watchlist/watchlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectedmovieComponent } from './selectedmovie/selectedmovie/selectedmovie.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortByOrderPipe,
    MainpageComponent,
    WatchlistComponent,
    MoviedetailsComponent,
    SelectedmovieComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatSortModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonToggleModule,
    YouTubePlayerModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
