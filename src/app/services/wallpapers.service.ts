import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WallpaperResults } from '../interfaces/wallpapers';

@Injectable({
  providedIn: 'root'
})
export class WallpapersService {

  constructor(private http: HttpClient) { }
  
    getWallpapers(): Observable<WallpaperResults> {
      return this.http.get<WallpaperResults>(`https://mocki.io/v1/2aedde0e-5358-4741-b2b9-7eca56043a70`)
      // return this.http.get<WallpaperResults>(`https://wallhaven.cc/api/v1/search`)
    }
}
