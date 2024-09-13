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
      return this.http.get<WallpaperResults>(`https://mocki.io/v1/3ad55937-7f86-4438-af47-b6f0b01cef2c`)
      // return this.http.get<WallpaperResults>(`https://wallhaven.cc/api/v1/search`)
    }
}
