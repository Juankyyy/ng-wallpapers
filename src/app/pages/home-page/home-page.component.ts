import { Component } from '@angular/core';
import { CardWallpaperComponent } from '../../home/card-wallpaper/card-wallpaper.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardWallpaperComponent],
  templateUrl: './home-page.component.html',
  styles: `
    @keyframes scroll {
      0% {
        transform: translateY(0);
      }
      30% {
        transform: translateY(100px);
      }
    }

    svg #wheel {
      animation: scroll ease 1.5s infinite;
    }

    section {
      height: calc(100dvh - 75px);
    }
  `
})
export class HomePageComponent {

}
