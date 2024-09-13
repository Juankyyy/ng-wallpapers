import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CardWallpaperComponent } from '../../home/card-wallpaper/card-wallpaper.component';
import { WallpapersService } from '../../services/wallpapers.service';
import { WallpaperResults } from '../../interfaces/wallpapers';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'WallpapersSection',
  standalone: true,
  imports: [CardWallpaperComponent, AsyncPipe],
  templateUrl: './wallpapers-section.component.html',
  styleUrl: './wallpapers-section.component.css'
})
export class WallpapersSectionComponent implements OnInit {
  public wallpaperResults$!: Observable<WallpaperResults>;
  constructor(private service: WallpapersService) { }

  ngOnInit(): void {
    this.wallpaperResults$ = this.service.getWallpapers();
  }
}
