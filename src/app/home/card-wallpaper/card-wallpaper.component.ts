import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Wallpaper } from '../../interfaces/wallpapers';

@Component({
  selector: 'CardWallpaper',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-wallpaper.component.html',
  styleUrl: './card-wallpaper.component.css'
})
export class CardWallpaperComponent  {
  @Input() wallpaper!: Wallpaper;
}
