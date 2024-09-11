import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardWallpaperComponent } from '../../home/card-wallpaper/card-wallpaper.component';

@Component({
  selector: 'WallpapersSection',
  standalone: true,
  imports: [CardWallpaperComponent, NgFor],
  templateUrl: './wallpapers-section.component.html',
  styleUrl: './wallpapers-section.component.css'
})
export class WallpapersSectionComponent {
  items = new Array(10);
}
