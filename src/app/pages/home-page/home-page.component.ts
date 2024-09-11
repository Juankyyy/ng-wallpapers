import { Component } from '@angular/core';
import { WallpapersSectionComponent } from '../../home/wallpapers-section/wallpapers-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [WallpapersSectionComponent],
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
