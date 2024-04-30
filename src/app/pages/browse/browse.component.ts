import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../core/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../../shared/models/video-content.interface';
import { forkJoin, map } from 'rxjs';



@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BannerComponent, MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit {

  movieService = inject(MovieService)
  arr:any =[];index:number = 0

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = []

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated()
  ]
  
  ngOnInit(): void {
    // this.arr = 
    forkJoin(this.sources).subscribe((res:any)=>{ 
      [this.movies,this.tvShows,this.ratedMovies,this.nowPlayingMovies,this.popularMovies,this.topRatedMovies,this.upcomingMovies] = res.map((res:any)=>res.results); 
    })
     
  }

}

