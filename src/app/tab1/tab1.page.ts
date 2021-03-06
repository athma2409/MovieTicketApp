import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private router: Router, private movieService: MovieService) { }

  movie = [];

  ngOnInit() {
    this.movieService.getMovies().subscribe((result) => { this.movie = result; });

  }

  onSelect(m) {
    this.router.navigate(['/bookTickets/' + m.id]);
  }

  offers() {
    this.router.navigate(['/offers']);

  }

  logoutApp() {
    this.router.navigate(['/login']);
  }
  loginPage() {
    this.router.navigate(['/login']);
  }

  


}
