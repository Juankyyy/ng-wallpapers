export interface Wallpaper {
    id: string;
    url: string;
    path: string;
    thumbs: Thumbs;
}

export interface Thumbs {
    large: string;
}

export interface WallpaperResults {
    meta: Object;
    data: Wallpaper[];
}