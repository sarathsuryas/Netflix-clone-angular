import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

const options = {
  params:{
    include_adult:'false',
    include_video:'true',
    language:'en-US',
    page:'1',
    sort_by:'popularity.desc'
  },
  headers:{
    accept:'application/json',
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NkNjQxM2I5OWVjZDJmOGVlNDNhZWYwZjI5YzQ0MCIsInN1YiI6IjY2MmY4NmFmNjlkMjgwMDEyMzQzN2I2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wUjHwGwssOfEA0WSA_P4tGiNF1Qc-JzLJfseSA1mKRQ'
  }
}
@Injectable({
  providedIn:'root'
})
export class MovieService {
  http = inject(HttpClient)
   getMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie',options)
  }
  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }

  

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }

}