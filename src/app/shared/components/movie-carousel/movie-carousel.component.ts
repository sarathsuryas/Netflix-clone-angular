import {  NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Input } from '@angular/core';
import { IVideoContent } from '../../models/video-content.interface';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { ImagePipe } from '../../pipes/image.pipe';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css',
  imports: [NgFor,DescriptionPipe,ImagePipe,NgIf],
  animations:[
    trigger('fade',[
      transition('void =>*',[
        style({opacity:0}),
        animate(300,style({opacity:1}))
      ])
    ])
  ]
})
export class MovieCarouselComponent implements AfterViewInit {
@Input() VideoContents:IVideoContent[] = []; 
@Input() title!:string;
@ViewChild('swiperContainer') swiperContainer!:ElementRef
selectedContent:string | null = null;


ngAfterViewInit(): void {
  this.initSwiper()
}

private initSwiper() {
  return new Swiper(this.swiperContainer.nativeElement, {
    slidesPerView: 3,
    slidesPerGroup: 2,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        centeredSlides: true,
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        centeredSlides: false,
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 5,
        centeredSlides: false,
      },
      1800: {
        slidesPerView: 5,
        slidesPerGroup: 6,
        spaceBetween: 5,
        centeredSlides: false,
      }
    }
  })
}

setHoverMovie(movie:IVideoContent) {
  
this.selectedContent = movie.title ?? movie.name;
}

clearHoverMovie() {
  this.selectedContent = null;
}

}
