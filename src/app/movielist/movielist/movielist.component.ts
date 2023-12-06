import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { Movielist } from '../movielist';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
  standalone: true,
  imports: [BrowserModule],
})
export class MovielistComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
