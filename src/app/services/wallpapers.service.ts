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
      return this.http.get<WallpaperResults>(`https://mocki.io/v1/1e9f51dc-e900-4a00-964a-0dd1d23a0d11`)
      // return this.http.get<WallpaperResults>(`https://wallhaven.cc/api/v1/search`)
    }
}
