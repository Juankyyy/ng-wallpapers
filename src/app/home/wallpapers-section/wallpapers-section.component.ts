import { Component } from '@angular/core';
import { CardWallpaperComponent } from '../../home/card-wallpaper/card-wallpaper.component';

@Component({
  selector: 'app-wallpapers-section',
  standalone: true,
  imports: [CardWallpaperComponent],
  templateUrl: './wallpapers-section.component.html',
  styleUrl: './wallpapers-section.component.css'
})
export class WallpapersSectionComponent {

}
